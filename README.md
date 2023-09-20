# Nuxt + Tailwind + tRPC + Drizzle ORM boilerplate

This is a starting point and example for what I deem an ideal full-stack Nuxt setup. 
This Nuxt project provides out of the box full-stack type-safety and validations
which are "inferred" from the database all the way up into the composables and components 

## Hosting (fill in yourself)

| What | Where | Description |
|---|---|---|
| DNS, Email, Domain |  | 
| Nuxt / Nitro tRPC API |  |  |
| Neon / Postgres DB | [Neon](https://neon.tech/) |  |

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
