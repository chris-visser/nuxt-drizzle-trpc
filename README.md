# Nuxt + Tailwind + tRPC + Drizzle ORM boilerplate

This is a starting point and example for what I deem an ideal full-stack Nuxt setup. 
This Nuxt project provides out of the box full-stack type-safety and validations
which are "inferred" from the database all the way up into the composables and components 

## Getting started

Install dependencies

```bash
pnpm install # Could also be Yarn, NPM or Bun if you prefer
```

Add a Postgres URL to the `.env` file. (see `.env.example`). I recommend using Neon DB. 
Its fully managed and has a generous free tier (3gig storage) at the time of writing.
Vercel is using Neon DB under the hood for its own Postgres offering, but only provides 
256mb free storage.

## DB Migrations 

Simply change the schemas or add new TS files at `./src/server/db/*.ts`

When you've made changes, you should generate a SQL migration file using the below command.

```bash
pnpm migrations
```

This will add a .sql file to the `./src/server/db/migrations` folder. When the project 
is started in dev mode, it will automatically sync that migration with the database

## Hosting (fill in yourself)

| What | Recommendation    | Description                |
|---|-------------------|----------------------------|
| DNS, Email, Domain | Hostnet, Cloudflare, whatever |                            | 
| Nuxt / Nitro tRPC API | Vercel or Netlify | Both options are just fine |
| Neon / Postgres DB | [Neon](https://neon.tech/) |               |

## Stack

| What                                                  | Responsible for                                                          |
|-------------------------------------------------------|--------------------------------------------------------------------------|
| [Nuxt](https://nuxt.com/)                             | Vue Meta Framework                                                       |
| [Nitro](https://nitro.unjs.io/)                       | API server (part of Nuxt)                                                |
| [Drizzle](https://orm.drizzle.team/docs/overview)     | ORM for Postgres                                                         |
| [tRPC](https://trpc.io/)                              | tRPC is the API framework between Nuxt and the Nitro Server              |
| [Zod](https://zod.dev/)                               | API Validation and fullstack typesafety                                  |
| [Tailwind](https://tailwindcss.com/docs/installation) | CSS tooling and designs                                                  |
| [nuxt-icon](https://nuxt.com/modules/icon)            | One icon library/module that allows loading icons from different vendors |

## How it works

Nuxt is the main framework. It's essentially a layered framework that renders a Vue app with Tailwind as the design tool. 
Nuxt uses Nitro as web server to handle incoming requests. 
Nitro also acts as **BFF (Backend For Frontend) API** and its part of the Nuxt app under the `src/server` folder. 

Communication between the Nuxt app and BFF API works via **tRPC which ensures full-stack type-safety** and 
a graceful integration with **Zod the validation library**. The API also communicates with a Postgres database 
via Drizzle ORM which has a graceful integration with Zod to provide out of the box validations and types.

In other words Typescript types and Zod validation schemas for CRUD are generated using Drizzle based on its database 
schema located in `./src/server/db/*.ts`. These Zod schemas are used on the tRPC server located in 
`./src/server/trpc/routes/*.ts` which provides types and validations for the tRPC client used in Nuxt 
components and composables. 
