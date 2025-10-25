# Todo App with Appwrite

A simple Todo application that uses Appwrite as backend (authentication, database, file storage). This repository contains the frontend and minimal backend integration to demonstrate creating, reading, updating and deleting todos.

## Features
- Email/password auth (Appwrite Accounts)
- CRUD operations for todos (Appwrite Database)
- Real-time updates via Appwrite subscriptions
- Simple, minimal code for learning and extension

## Prerequisites
- Node.js 16+ or compatible
- Appwrite server (self-hosted or cloud)
- npm or yarn

## Quick setup

1. Install dependencies
```bash
# from project root
npm install
# or
yarn
```

2. Run Appwrite (if self-hosted)
- Follow Appwrite docs to run via Docker:
    https://appwrite.io/docs/installation

3. Create Appwrite resources
- Create a Project
- Enable Email/Password provider under Authentication
- Create a Database (e.g., `todos_db`) and a Collection (e.g., `todos`) with fields:
    - title: string
    - completed: boolean
    - createdAt: int (or use Appwrite's $createdAt)
- Create API key or note your Project ID for client usage

## Environment

Create a `.env` (or `.env.local`) with these values:

```
APPWRITE_ENDPOINT=https://[YOUR_APPWRITE_ENDPOINT]
APPWRITE_PROJECT_ID=[YOUR_PROJECT_ID]
APPWRITE_API_KEY=[OPTIONAL_SERVER_KEY]
```

- For client-side apps you only need APPWRITE_ENDPOINT and APPWRITE_PROJECT_ID.
- Use an API key or server SDK for privileged operations (server-side).

## Running the app

Start the development server (example for a React/Vue/Next app):

```bash
npm run dev
# or
yarn dev
```

If there is a separate backend service, run it similarly:
```bash
cd server
npm install
npm run start
```

## Usage

- Register or sign in using the app UI (email/password).
- Create todos, mark complete/incomplete, update or delete.
- Real-time updates will reflect changes from other clients.

## Useful Appwrite SDK snippets

Client (JavaScript):
```js
import { Client, Account, Databases } from "appwrite";

const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT_ID);

const account = new Account(client);
const databases = new Databases(client);
```

Create a todo:
```js
await databases.createDocument('DATABASE_ID', 'COLLECTION_ID', 'unique()', {
    title: "Buy milk",
    completed: false
});
```

Subscribe to changes:
```js
import { Subscribe } from "appwrite";

const sdk = new Client().setEndpoint(...).setProject(...);
const realtime = new Subscribe(sdk);
realtime.subscribe(`databases.DATABASE_ID.collections.COLLECTION_ID.documents`, response => {
    console.log(response);
});
```

## Contributing
- Fork and create a feature branch
- Open PR with a clear description
- Keep changes focused and well-documented

## License
MIT — See LICENSE file.

Done.