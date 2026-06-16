# deployment

## Purpose

Defines how the site is built and shipped to the production host on every push to `main`.

## Requirements

### Requirement: Production deploys are triggered by pushes to `main`
The CI pipeline SHALL build and deploy the site automatically when commits land on the `main` branch. Other branches SHALL NOT trigger production deploys.

#### Scenario: Push to main
- **WHEN** a commit is pushed to `main`
- **THEN** the deploy workflow runs end-to-end and updates the live site

#### Scenario: Push to a feature branch
- **WHEN** a commit is pushed to any branch other than `main`
- **THEN** no production deploy is triggered

### Requirement: Deploys are serialized
Production deploys SHALL be serialized — at most one deploy SHALL run at any time, and a running deploy SHALL NOT be cancelled by a newer push.

#### Scenario: Two pushes in quick succession
- **WHEN** a second push to `main` arrives while a deploy is in progress
- **THEN** the new run waits for the in-flight run to finish before starting

### Requirement: Build is separated from deploy
The pipeline SHALL run two distinct jobs: a `build` job that produces the `dist/` artifact, and a `deploy` job that consumes that artifact. The deploy job SHALL NOT rebuild the site.

#### Scenario: Build job
- **WHEN** the `build` job runs
- **THEN** it installs dependencies with `npm ci`, runs `npm run build`, and uploads `dist/` as a workflow artifact

#### Scenario: Deploy job
- **WHEN** the `deploy` job runs
- **THEN** it downloads the artifact produced by `build` and ships it without rebuilding

### Requirement: Deploy job runs in the protected `production` environment
The deploy job SHALL declare `environment: production` so GitHub environment protection rules and the `production` secret scope apply.

#### Scenario: Secret access
- **WHEN** the deploy job needs `SSH_PRIVATE_KEY`, `SSH_USER`, `SSH_HOST`, `SSH_TARGET_DIR`, `SSH_KNOWN_HOSTS`, or `SSH_PORT`
- **THEN** the values resolve from the `production` environment secrets

### Requirement: Shipping uses authenticated rsync over SSH
The deploy SHALL mirror `dist/` to the production host using `rsync` over SSH, with deletion enabled so the remote directory tracks the build exactly.

#### Scenario: Default port
- **WHEN** `SSH_PORT` is not set
- **THEN** rsync connects on port 22

#### Scenario: Custom port
- **WHEN** `SSH_PORT` is set
- **THEN** rsync connects on that port

#### Scenario: Removed files
- **WHEN** a file that existed in the previous build is no longer in the new `dist/`
- **THEN** rsync removes it from the remote target

### Requirement: SSH host authenticity is verified
The deploy SHALL verify the host fingerprint via `SSH_KNOWN_HOSTS` before transferring files. Strict host key checking SHALL NOT be disabled.

#### Scenario: Known host
- **WHEN** the deploy connects to `SSH_HOST`
- **THEN** the host key is checked against the value loaded from `SSH_KNOWN_HOSTS`
