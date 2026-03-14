---
title: Quick Start
description: Get Securo running on your machine in minutes.
---

Securo runs entirely on your own infrastructure using Docker. No accounts, no cloud, no data leaving your machine.

## Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop/) (Docker Desktop on Windows/macOS)

## Installation

### Linux & macOS

The install script will set up Docker if it isn't already installed:

```bash
curl -fsSL https://usesecuro.com/install.sh | bash
```

### Windows

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)
2. Clone the repository and start the containers:

```bash
git clone https://github.com/securo-finance/securo.git && cd securo
docker compose up --build
```

## First Run

Once the containers are running, open [http://localhost:3000](http://localhost:3000) in your browser and create an account. That's it — you're up and running.

## Next Steps

- [Set up bank sync](/guides/bank-sync/) to automatically import transactions from your bank
- Head to **Import** in the app to import existing transactions from OFX, QIF, CAMT, or CSV files
