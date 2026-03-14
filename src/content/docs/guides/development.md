---
title: Development
description: Running Securo locally for development and contribution.
---

## Running the Stack

Start all services (backend, frontend, database, and worker) with:

```bash
docker compose up --build
```

The `--build` flag is required after any dependency changes. On subsequent runs without dependency changes you can omit it:

```bash
docker compose up
```

## Running Backend Tests

With the containers running, execute the test suite inside the backend container:

```bash
docker compose exec backend pytest
```

## Project Structure

| Directory   | Purpose                                                |
| ----------- | ------------------------------------------------------ |
| `backend/`  | FastAPI application, Alembic migrations, Celery worker |
| `frontend/` | React + Vite application                               |
| `docs/`     | This Starlight documentation site                      |
| `scripts/`  | Development helper scripts                             |

## Contributing

See [CONTRIBUTING.md](https://github.com/securo-finance/securo/blob/main/CONTRIBUTING.md) for contribution guidelines, code style, and pull request process.
