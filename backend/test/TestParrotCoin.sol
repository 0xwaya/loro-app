// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "truffle/Assert.sol";
import "../contracts/ParrotCoin.sol";

contract TestParrotCoin {
ParrotCoin parrotCoin;


function beforeEach() public {
    parrotCoin = new ParrotCoin();
}

function testInitialBalance() public {
    uint256 expected = 4200000 * 10 ** 18;
    Assert.equal(parrotCoin.balanceOf(msg.sender), expected, "Initial balance is incorrect");
}

function testTransfer() public {
    address recipient = 0x123;
    uint256 amount = 1000 * 10 ** 18;

    // Transfer tokens from owner to recipient
    bool success = parrotCoin.transfer(recipient, amount);
    Assert.isTrue(success, "Transfer should be successful");

    // Check balances
    uint256 expectedOwnerBalance = 4200000 * 10 ** 18 - amount;
    uint256 expectedRecipientBalance = amount;
    Assert.equal(parrotCoin.balanceOf(msg.sender), expectedOwnerBalance, "Owner balance is incorrect");
    Assert.equal(parrotCoin.balanceOf(recipient), expectedRecipientBalance, "Recipient balance is incorrect");
}

function testTransferInsufficientBalance() public {
    address recipient = 0x123;
    uint256 amount = 5000 * 10 ** 18;

    // Transfer tokens from owner to recipient
    bool success = parrotCoin.transfer(recipient, amount);
    Assert.isFalse(success, "Transfer should fail due to insufficient balance");

    // Check balances
    uint256 expectedOwnerBalance = 4200000 * 10 ** 18;
    uint256 expectedRecipientBalance = 0;
    Assert.equal(parrotCoin.balanceOf(msg.sender), expectedOwnerBalance, "Owner balance is incorrect");
    Assert.equal(parrotCoin.balanceOf(recipient), expectedRecipientBalance, "Recipient balance is incorrect");
}

function testTransferFrom() public {
    address owner = msg.sender;
    address spender = 0x123;
    address recipient = 0x456;
    uint256 amount = 1000 * 10 ** 18;

    // Approve spender to spend owner's tokens
    bool approvalSuccess = parrotCoin.approve(spender, amount);
    Assert.isTrue(approvalSuccess, "Approval should be successful");

    // Transfer tokens from owner to recipient using spender's allowance
    bool transferSuccess = parrotCoin.transferFrom(owner, recipient, amount, {from: spender});
    Assert.isTrue(transferSuccess, "Transfer should be successful");

    // Check balances
    uint256 expectedOwnerBalance = 4200000 * 10 ** 18 - amount;
    uint256 expectedRecipientBalance = amount;
    Assert.equal(parrotCoin.balanceOf(owner), expectedOwnerBalance, "Owner balance is incorrect");
    Assert.equal(parrotCoin.balanceOf(recipient), expectedRecipientBalance, "Recipient balance is incorrect");

    // Check allowance
    uint256 expectedAllowance = 0;
    Assert.equal(parrotCoin.allowance(owner, spender), expectedAllowance, "Allowance is incorrect");
}

function testTransferFromInsufficientBalance() public {
    address owner = msg.sender;
    address spender = 0x123;
    address recipient = 0x456;
    uint256 amount = 5000 * 10 ** 18;

    // Approve spender to spend owner's tokens
    bool approvalSuccess = parrotCoin.approve(spender, amount);
    Assert.isTrue(approvalSuccess, "Approval should be successful");

    // Transfer tokens from owner to recipient using spender's allowance
    bool transferSuccess = parrotCoin.transferFrom(owner, recipient, amount, {from: spender});
    Assert.isFalse(transferSuccess, "Transfer should fail due to insufficient balance");

    // Check balances
    uint256 expectedOwnerBalance = 4200000 * 10 ** 18;
    uint256 expectedRecipientBalance = 0;
    Assert.equal(parrotCoin.balanceOf(owner), expectedOwnerBalance, "Owner balance is incorrect");
    Assert.equal(parrotCoin.balanceOf(recipient), expectedRecipientBalance, "Recipient balance is incorrect");

    // Check allowance
    uint256 expectedAllowance = amount;
    Assert.equal(parrotCoin.allowance(owner, spender), expectedAllowance, "Allowance is incorrect");
}

function testApprove() public {
    address spender = 0x123;
    uint256 amount = 1000 * 10 ** 18;

    // Approve spender to spend owner's tokens
    bool success = parrotCoin.approve(spender, amount);
    Assert.isTrue(success, "Approval should be successful");

    // Check allowance
    uint256 expectedAllowance = amount;
    Assert.equal(parrotCoin.allowance(msg.sender, spender), expectedAllowance, "Allowance is incorrect");
}