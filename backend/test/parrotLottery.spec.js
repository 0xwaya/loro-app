const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ParrotLottery", function () {
  it("restricts admin setters to owner", async function () {
    const [owner, stranger] = await ethers.getSigners();
    const ParrotLottery = await ethers.getContractFactory("ParrotLottery");
    const Pandemonium = await ethers.getContractFactory("Pandemonium");
    const ParrotCoin = await ethers.getContractFactory("ParrotCoin");
    const lottery = await ParrotLottery.deploy();
    const nft = await Pandemonium.deploy();
    const coin = await ParrotCoin.deploy();
    await lottery.deployed();
    await nft.deployed();
    await coin.deployed();

    await expect(lottery.connect(stranger).setNftAddress(stranger.address)).to.be.revertedWith(
      "Ownable: caller is not the owner"
    );
    await expect(lottery.connect(stranger).setCoinAddress(stranger.address)).to.be.revertedWith(
      "Ownable: caller is not the owner"
    );

    await expect(lottery.connect(owner).setNftAddress(nft.address)).to.not.be.reverted;
    await expect(lottery.connect(owner).setCoinAddress(coin.address)).to.not.be.reverted;
  });

  it("rejects sendPrize when caller is not configured NFT contract", async function () {
    const ParrotLottery = await ethers.getContractFactory("ParrotLottery");
    const lottery = await ParrotLottery.deploy();
    await lottery.deployed();

    await expect(lottery.sendPrize()).to.be.revertedWith("NFT contract not set");
  });

  it("allows owner to set winning amount and blocks non-owner", async function () {
    const [owner, stranger] = await ethers.getSigners();
    const ParrotLottery = await ethers.getContractFactory("ParrotLottery");
    const lottery = await ParrotLottery.deploy();
    await lottery.deployed();

    const newAmount = ethers.utils.parseEther("25");

    await expect(lottery.connect(stranger).setWinningAmount(newAmount)).to.be.revertedWith(
      "Ownable: caller is not the owner"
    );
    await expect(lottery.connect(owner).setWinningAmount(newAmount)).to.not.be.reverted;
    expect(await lottery.getWinningAmount()).to.equal(newAmount);
  });

  it("rejects non-contract wiring addresses", async function () {
    const [, stranger] = await ethers.getSigners();
    const ParrotLottery = await ethers.getContractFactory("ParrotLottery");
    const lottery = await ParrotLottery.deploy();
    await lottery.deployed();

    await expect(lottery.setNftAddress(ethers.constants.AddressZero)).to.be.revertedWith("NFT address cannot be zero");
    await expect(lottery.setCoinAddress(ethers.constants.AddressZero)).to.be.revertedWith("Coin address cannot be zero");
    await expect(lottery.setNftAddress(stranger.address)).to.be.revertedWith("NFT address must be a contract");
    await expect(lottery.setCoinAddress(stranger.address)).to.be.revertedWith("Coin address must be a contract");
  });
});
