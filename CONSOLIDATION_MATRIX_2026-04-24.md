# Loro Repo Consolidation Matrix (2026-04-24)

## Canonical source of truth

- Keep: `github.com/0xwaya/loro-app` (cloned to `/Users/pc/code/loro-app-clean`)
- Current live commit: `bd781b9`

## Safety backups created

- `/Users/pc/code/_archive-loro-2026-04-24/loro-app.tar.gz`
- `/Users/pc/code/_archive-loro-2026-04-24/loro-dapp.tar.gz`
- `/Users/pc/code/_archive-loro-2026-04-24/pandemonium-app.tar.gz`
- `/Users/pc/code/_archive-loro-2026-04-24/macaw-engine.tar.gz`

## Repo-by-repo decision

1. `/Users/pc/code/loro-app`
- Status: points to canonical remote but behind live by 19 commits, heavily noisy.
- Decision: archive-only; do not use as active base.
- Candidate salvage: selective frontend UX files after manual review.

2. `/Users/pc/code/loro-dapp/loro-dapp`
- Status: points to canonical remote, behind by 13 and ahead by 1; divergent contract renames.
- Decision: archive-only; mine specific contract/feature diffs in controlled PRs.
- Candidate salvage: `backend/contracts/*`, `backend/scripts/*`, `frontend/pages/junglebook/*`.

3. `/Users/pc/code/pandemonium-app`
- Status: different remote (`0xwaya/pandemonium-app`), clean except `.DS_Store`.
- Decision: keep as reference repo, not canonical for `loro-app` deploy.
- Candidate salvage: historical docs/branding only.

4. `/Users/pc/code/macaw-engine`
- Status: non-git utilities (`constants/src/utils`).
- Decision: treat as support module; import code selectively if still needed.

## Sanitization baseline for canonical repo

1. Add/strengthen `.gitignore` for:
- `.DS_Store`
- `backend/artifacts/`
- `backend/cache/`
- iCloud conflict files (`*.icloud`)

2. Verify local/CI health:
- install dependencies
- run tests/build
- confirm Vercel linkage and env parity

### Verification update (2026-04-24)

- Frontend:
  - `npm run lint` succeeded (warnings only)
  - `npm run build` succeeded
- Backend:
  - `npm run build` initially failed due to Solidity import/path incompatibilities
  - Repair applied in `backend/contracts/*.sol` and documented in `backend/README.md`
  - `npm run build` now succeeds (`npx hardhat compile`)
  - `npm run test` now succeeds (8 passing)
  - Local deploy dry-run succeeded (`npm run node` + `npm run deploy-local`)
  - Upgrade roadmap documented in `backend/UPGRADE_PLAN_2026-04-24.md`

3. Migration workflow
- Create `consolidation/*` branches in `/Users/pc/code/loro-app-clean`.
- Import changes by topic (contracts, frontend pages, content), one PR per topic.
- Reject generated/binary/noise files by policy.
