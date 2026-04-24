# Backend Upgrade Plan (2026-04-24)

## Current Baseline

- Compile: passing (`npm run build`)
- Tests: passing (`npm run test`, 8 passing)
- Local deploy scripts: passing (Pandemonium, ParrotCoin, ParrotLottery)
- Known gap: coverage plugin compatibility (`provider.send is not a function`)

## Phase 1: Stability and Correctness (immediate)

1. Add integration tests for prize flow.
- Scope:
  - deploy mock ERC20 + mock NFT, mint multiple holders, configure lottery, simulate VRF callback path.
  - verify winner receives exact configured prize amount.
2. Tighten input validation in contracts.
- Scope:
  - require non-zero addresses in setter functions.
  - emit events for `setNftAddress`, `setCoinAddress`, and `setWinningAmount`.
3. Add negative tests for setter validation and payout failure paths.

## Phase 2: Test and CI Hardening

1. Resolve `solidity-coverage` incompatibility.
- Options:
  - bump Hardhat/toolbox stack to compatible versions,
  - or pin `solidity-coverage` to a known-compatible release.
2. Add CI workflow for backend.
- Steps:
  - `npm ci`
  - `npm run build`
  - `npm run test`
  - `npm run lint` (if linting is added for backend scripts/tests)
3. Add artifact checks so generated build outputs remain untracked.

## Phase 3: Architecture and Gas Optimization

1. Replace Chainlink VRF v1 (`VRFConsumerBase`) with VRF v2+.
- Why:
  - v1 is legacy and operationally brittle.
  - v2 provides subscription-based operations and better production support.
2. Reduce NFT contract complexity.
- Scope:
  - review whether `ERC721Votes` is required; it heavily increases bytecode size.
  - consider splitting governance functionality into a separate contract if not required on-chain at mint time.
3. Add benchmark script for deployment gas and bytecode size deltas per release.

## Phase 4: Release and Operational Readiness

1. Add staged deployment checklist (local -> testnet -> production).
2. Add post-deploy verification steps (Etherscan verify, role checks, prize token funding checks).
3. Add runbook for routine lottery operations and incident handling.
