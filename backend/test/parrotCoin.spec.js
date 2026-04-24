const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ParrotCoin", function () {
  it("assigns total supply to deployer", async function () {
    const [owner] = await ethers.getSigners();
    const ParrotCoin = await ethers.getContractFactory("ParrotCoin");
    const token = await ParrotCoin.deploy();
    await token.deployed();

    const totalSupply = await token.totalSupply();
    expect(await token.balanceOf(owner.address)).to.equal(totalSupply);
  });

  it("transfers tokens between accounts", async function () {
    const [, recipient] = await ethers.getSigners();
    const ParrotCoin = await ethers.getContractFactory("ParrotCoin");
    const token = await ParrotCoin.deploy();
    await token.deployed();

    const amount = ethers.utils.parseEther("10");
    await expect(token.transfer(recipient.address, amount))
      .to.emit(token, "Transfer")
      .withArgs((await ethers.getSigners())[0].address, recipient.address, amount);

    expect(await token.balanceOf(recipient.address)).to.equal(amount);
  });

  it("supports approve/transferFrom", async function () {
    const [owner, spender, recipient] = await ethers.getSigners();
    const ParrotCoin = await ethers.getContractFactory("ParrotCoin");
    const token = await ParrotCoin.deploy();
    await token.deployed();

    const amount = ethers.utils.parseEther("5");
    await token.approve(spender.address, amount);

    await expect(token.connect(spender).transferFrom(owner.address, recipient.address, amount))
      .to.emit(token, "Transfer")
      .withArgs(owner.address, recipient.address, amount);

    expect(await token.allowance(owner.address, spender.address)).to.equal(0);
    expect(await token.balanceOf(recipient.address)).to.equal(amount);
  });
});
