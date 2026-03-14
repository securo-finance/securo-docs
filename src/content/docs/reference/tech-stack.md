---
title: Tech Stack
description: An overview of the technologies used in Securo.
---

## Stack Overview

| Layer | Technology |
|-------|-----------|
| Backend | [FastAPI](https://fastapi.tiangolo.com/), [SQLAlchemy](https://www.sqlalchemy.org/), [Alembic](https://alembic.sqlalchemy.org/), [Celery](https://docs.celeryq.dev/) |
| Frontend | [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/), [Tailwind CSS](https://tailwindcss.com/) |
| Database | [PostgreSQL](https://www.postgresql.org/) |
| Queue | [Redis](https://redis.io/) + Celery |
| Docs | [Astro Starlight](https://starlight.astro.build/) |

## Backend

The backend is a Python application built on **FastAPI** for the REST API, **SQLAlchemy** for the ORM, and **Alembic** for database migrations. Background jobs (such as bank sync and recurring transaction processing) are handled by a **Celery** worker backed by **Redis**.

Source: `backend/app/`

## Frontend

The frontend is a **React** single-page application written in **TypeScript** and bundled with **Vite**. Styling is done with **Tailwind CSS** and component composition uses **shadcn/ui** primitives.

Source: `frontend/src/`

## Database

PostgreSQL is the primary data store. All schema changes are managed through numbered Alembic migrations in `backend/alembic/versions/`.

## AI-Assisted Development

Parts of this codebase were built with the help of AI tools. All code is human-reviewed and no data leaves your environment.
