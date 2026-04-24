# Backend (Hardhat) Guide

This backend contains the Solidity contracts and deployment scripts for the Loro/Pandemonium dApp.

## Contracts

- `contracts/Pandemonium.sol` (ERC721-based NFT contract)
- `contracts/ParrotCoin.sol` (ERC20 token contract)
- `contracts/ParrotLottery.sol` (lottery contract using Chainlink VRF v1)

## Build and Verify

From `backend/`:

```bash
npm install
npm run build
npm run test
```

`npm run build` runs `npx hardhat compile`.
`npm run test` runs `npx hardhat test`.

## Local Development

```bash
npm run node
```

In a separate terminal:

```bash
npm run deploy-local
```

## Sepolia Deployment

Set environment variables in `backend/.env`:

```bash
PRIVATE_KEY=<64-hex-char-private-key-without-0x>
SEPOLIA_RPC_URL=<https RPC URL>
ETHERSCAN_API_KEY=<optional, for verification>
```

Then run one of:

```bash
npm run deploy-pandemonium-sepolia
npm run deploy-parrot-sepolia
npm run deploy-lottery-sepolia
```

## 2026-04-24 Repair Summary

The backend compile path was repaired with these contract compatibility updates:

1. Switched Solidity imports from relative `../node_modules/...` paths to package imports (`@openzeppelin/...`, `@chainlink/...`, `erc721a/...`).
2. Replaced deprecated OpenZeppelin import `draft-EIP712.sol` with `EIP712.sol`.
3. Updated `Pandemonium.supportsInterface` override list to include `ERC721URIStorage`.
4. Removed accidental `IERC721A` inheritance from `ParrotLottery` (it uses IERC721A as an interface dependency, not a base contract).
5. Updated `ParrotLottery.fulfillRandomness` signature to `fulfillRandomness(bytes32,uint256) internal override` for Chainlink VRFConsumerBase compatibility.

Build verification result on April 24, 2026:

- `npx hardhat compile`: success (42 Solidity files compiled)
- `npx hardhat test`: success (7 passing)
- Local deployment dry-run:
  - `npm run node` + `npm run deploy-local`: success
  - `npx hardhat run ./scripts/ParrotCoin_deploy.js --network hardhat`: success
  - `npx hardhat run ./scripts/ParrotLottery_deploy.js --network hardhat`: success
- Bytecode size warning addressed by enabling optimizer in `hardhat.config.js`.

## Maintenance Notes

1. Keep package-style imports in all Solidity files. Avoid `../node_modules/...` imports.
2. When upgrading OpenZeppelin or Chainlink dependencies, re-run `npm run build` and check override signatures.
3. If deployment size is still a blocker on a target network, tune optimizer `runs` and/or reduce contract inheritance complexity.
