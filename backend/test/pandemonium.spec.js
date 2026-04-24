const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Pandemonium", function () {
  it("grants admin and minter role to deployer", async function () {
    const [owner] = await ethers.getSigners();
    const Pandemonium = await ethers.getContractFactory("Pandemonium");
    const nft = await Pandemonium.deploy();
    await nft.deployed();

    const defaultAdmin = await nft.DEFAULT_ADMIN_ROLE();
    const minterRole = await nft.MINTER_ROLE();

    expect(await nft.hasRole(defaultAdmin, owner.address)).to.equal(true);
    expect(await nft.hasRole(minterRole, owner.address)).to.equal(true);
  });

  it("allows minter to mint and rejects non-minters", async function () {
    const [, stranger] = await ethers.getSigners();
    const Pandemonium = await ethers.getContractFactory("Pandemonium");
    const nft = await Pandemonium.deploy();
    await nft.deployed();

    await expect(nft.connect(stranger).safeMint(stranger.address, "ipfs://bad")).to.be.reverted;

    await expect(nft.safeMint(stranger.address, "ipfs://token-1"))
      .to.emit(nft, "Transfer");

    expect(await nft.ownerOf(0)).to.equal(stranger.address);
    expect(await nft.tokenURI(0)).to.equal("ipfs://token-1");
  });
});
