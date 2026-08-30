<br>
<p align='center'>
<img alt="Logo" align="justify-center" src="./frontend/public/loro-logo.png" width="20%" />
</p><br>

# Loro DApp (Pandemonium)

Macaw NFT collection dapp — mint, lottery, and balance flows with Chainlink VRF. Built for Sepolia / Optimism testnets.

**Live:** [loro.vercel.app](https://loro.vercel.app)

## Current Working Setup

- Frontend app: `frontend/` (Next.js + RainbowKit + Wagmi)
- Smart contracts + tests: `backend/` (Hardhat + Solidity)
- Sepolia-first flow: mint, lottery, and balance pages are wired to Sepolia-compatible defaults

## Local Commands

```bash
cd backend && npm install && npm run build && npm test
cd frontend && npm install && npm run lint && npm run build
```

## 2026 Code Review + Hardening

- Frontend lint/build succeed in CI-friendly environments.
- API route hardening:
  - safer body parsing (handles invalid JSON)
  - EVM address validation
  - explicit chain validation
- Contract hardening:
  - lottery wiring rejects zero-address and non-contract addresses
  - ERC20 transfer/approve guards for zero-address operations
  - approval reset rule to reduce ERC20 allowance race risks
- Contract tests updated to cover the new guards

## Web3 Security Notes

- Verify contract addresses before wiring lottery/token dependencies.
- Keep private keys only in local `.env` files and never commit them.
- Prefer resetting token allowances to `0` before setting a new non-zero value.
- Keep production deployments on maintained oracles/VRF versions and re-audit before mainnet.

## Stack

- Solidity · Hardhat · Ethers.js
- Next.js · RainbowKit · Wagmi
- Chainlink VRF · Ethereum / Optimism testnets

## License

MIT — [@0xwaya](https://github.com/0xwaya) / [Waya Labs](https://wayalabs.com)
