## Development

### Quick Start

#### Worker
```
npm install
cp wrangler.toml.example wrangler.toml
npm run dev
```
#### Site

We use esbuild & hotwire.dev to build the frontend site. Modify the code in `src/client`.

```
npm run build:fe
```

### Database

#### Use Raw SQL

:(

```
npx wrangler d1 execute <DATABASE_NAME> --local --file=./db/migrations/1.sql
npx wrangler d1 execute <DATABASE_NAME> --local --command="SELECT * FROM Users"
```
#### Use D1 Migrations
:)

For readable purpose, we use D1 Migrations to manage database migrations.

```
npx wrangler d1 migrations create <DATABASE_NAME> users
npx wrangler d1 migrations apply <DATABASE_NAME> 
npx wrangler d1 migrations list <DATABASE_NAME> 
```

## Deploy

```
npm run deploy
```
