// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "erc721a/contracts/IERC721A.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";

contract ParrotLottery is VRFConsumerBase, Ownable {

    
    using EnumerableSet for EnumerableSet.AddressSet; 

    bytes32 internal keyHash; // VRF key hash
    uint256 internal fee; // VRF fee

    address winner; // Winner address from nft owner
    IERC721A nftAddress; // ERC721A
    IERC20 coinAddress; // ERC20
    uint256 winningAmount = 10 * 10 ** 18; // 10 tokens (18 decimals)

    EnumerableSet.AddressSet entrants; // Entrants address from nft owner

    constructor()
        VRFConsumerBase(
            0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D, // VRF Coordinator
            0x326C977E6efc84E512bB9C30f76E30c160eD06FB  // LINK Token
        )
    {
        keyHash = 0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15;
        fee = 0.1 * 10 ** 18; // 0.1 LINK (Varies by network)
    }

    function sendPrize() external returns (bytes32 requestId) {
        require(address(nftAddress) != address(0), "NFT contract not set");
        require(address(coinAddress) != address(0), "Coin contract not set");
        require(msg.sender == address(nftAddress), "Only NFT address contract can call");
        setEntrants();
        require(entrants.length() > 0, "There are no entrants!");
        require(LINK.balanceOf(address(this)) >= fee, "Not enough LINK - fill contract with faucet");

        return requestRandomness(keyHash, fee);
    }

    /**
     * Callback function used by VRF Coordinator
     */
    function fulfillRandomness(bytes32, uint256 randomness) internal override {
        address[] memory currentEntrants = entrants.values();
        require(currentEntrants.length > 0, "No entrants available");
        winner = currentEntrants[randomness % currentEntrants.length];
        require(coinAddress.transfer(winner, winningAmount), "Prize transfer failed");
    }

    function getWinner() external view returns (address) {
        return winner;
    }  

    function getEntrants() external view returns (address[] memory) {
        return entrants.values();
    }  

    function setNftAddress(address _nftAddress) external onlyOwner {
        nftAddress = IERC721A(_nftAddress);
    }

    function setCoinAddress(address _coinAddress) external onlyOwner {
        coinAddress = IERC20(_coinAddress);
    }

    function setWinningAmount(uint256 _winningAmount) external onlyOwner {
        require(_winningAmount > 0, "Winning amount must be > 0");
        winningAmount = _winningAmount;
    }

    function getWinningAmount() external view returns (uint256) {
        return winningAmount;
    }

    function setEntrants() private {        
        IERC721A tokenContract = IERC721A(nftAddress);
        uint256 contractTotalSupply = tokenContract.totalSupply();

        while (entrants.length() > 0) {
            entrants.remove(entrants.at(entrants.length() - 1));
        }

        for(uint256 i = 0; i < contractTotalSupply; i++){
            entrants.add(tokenContract.ownerOf(i));
        }
    }

}
