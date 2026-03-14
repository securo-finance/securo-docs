---
title: Bank Sync
description: Automatically sync transactions from your bank using Pluggy.
---

Securo supports automatic bank synchronisation via [Pluggy](https://pluggy.ai). This is entirely optional — Securo works without it using manual entry or file imports.

## Setup

1. Sign up for a Pluggy account at [pluggy.ai](https://pluggy.ai) and obtain your API credentials.

2. Create a `.env` file in the root of the Securo project:

```env
PLUGGY_CLIENT_ID=your-client-id
PLUGGY_CLIENT_SECRET=your-client-secret
```

3. Restart the containers:

```bash
docker compose up
```

## Connecting an Account

Once the credentials are configured, go to **Accounts** in the app and use the **Connect Bank** option to link your institution through the Pluggy widget.

## Extensibility

The provider system is designed to be extensible. Additional sync providers can be added under `backend/app/providers/`.
