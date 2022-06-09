# Nest JS + TypeORM

## Description

This is POC using a node backend framework called Nest JS and an ORM called TypeORM

## Installation

```bash
$ pnpm install
```

## Seeds / fixtures
### Libs
[Faker](https://www.npmjs.com/package/@faker-js/faker)
[typeorm-seeding](https://www.npmjs.com/package/typeorm-seeding)

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Commands

```bash
# Create a ressource called article with all the config files.
$ nest g resource article
```

## Tutorials

https://www.youtube.com/watch?v=uy05FqqJ4TM

## Docs

[Nest JS](https://docs.nestjs.com/techniques/database#migrations)
[TypeORM](https://typeorm.io/)
[TypeORM Migrations](https://orkhan.gitbook.io/typeorm/docs/migrations#how-migrations-work)
[Exploring Nestjs module system](https://javascript.plainenglish.io/exploring-nestjs-nests-module-system-88c6d7ad0970)
[COPA Backend](https://github.com/copa-ch/copa-backend)
