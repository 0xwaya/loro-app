// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract ParrotCoin is IERC20, Ownable {

    uint256 private constant MAX_UINT256 = type(uint256).max;

mapping(address => uint256) private balances;
mapping(address => mapping(address => uint256)) private allowed;

string public name = "ParrotCoin"; // Set the name for display purposes
uint8 public immutable decimals = 18; // 18 is the most common number of decimal places
string public symbol = "LORO"; // Set the symbol for display purposes
uint256 public totalSupply = 4200000 * 10 ** 18; // 4.2 million tokens  (4.2 * 10^6)


constructor() {
    balances[msg.sender] = totalSupply;
    emit Transfer(address(0), msg.sender, totalSupply);
}

function transfer(address _to, uint256 _value) public override returns (bool) {
    require(balances[msg.sender] >= _value, "Insufficient balance");

    balances[msg.sender] -= _value;
    balances[_to] += _value;

    emit Transfer(msg.sender, _to, _value);
    return true;
}

function transferFrom(address _from, address _to, uint256 _value) public override returns (bool) {
    uint256 allowance_ = allowed[_from][msg.sender];
    require(balances[_from] >= _value && allowance_ >= _value, "Insufficient balance or allowance");

    balances[_to] += _value;
    balances[_from] -= _value;
    if (allowance_ < MAX_UINT256) {
        allowed[_from][msg.sender] -= _value;
    }

    emit Transfer(_from, _to, _value);
    return true;
}

function balanceOf(address _owner) public view override returns (uint256) {
    return balances[_owner];
}

function approve(address _spender, uint256 _value) public override returns (bool) {
    allowed[msg.sender][_spender] = _value;
    emit Approval(msg.sender, _spender, _value);
    return true;
}

function allowance(address _owner, address _spender) public view override returns (uint256) {
    return allowed[_owner][_spender];
    }
}
