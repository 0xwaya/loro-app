const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ParrotLottery", function () {
  it("restricts admin setters to owner", async function () {
    const [owner, stranger] = await ethers.getSigners();
    const ParrotLottery = await ethers.getContractFactory("ParrotLottery");
    const lottery = await ParrotLottery.deploy();
    await lottery.deployed();

    await expect(lottery.connect(stranger).setNftAddress(stranger.address)).to.be.revertedWith(
      "Ownable: caller is not the owner"
    );
    await expect(lottery.connect(stranger).setCoinAddress(stranger.address)).to.be.revertedWith(
      "Ownable: caller is not the owner"
    );

    await expect(lottery.connect(owner).setNftAddress(stranger.address)).to.not.be.reverted;
    await expect(lottery.connect(owner).setCoinAddress(stranger.address)).to.not.be.reverted;
  });

  it("rejects sendPrize when caller is not configured NFT contract", async function () {
    const ParrotLottery = await ethers.getContractFactory("ParrotLottery");
    const lottery = await ParrotLottery.deploy();
    await lottery.deployed();

    await expect(lottery.sendPrize()).to.be.revertedWith("Only NFT address contract can call");
  });
});
