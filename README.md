# Nest JS + TypeORM

## Description

This is POC using a node backend framework called Nest JS and an ORM called TypeORM

## Installation

```bash
$ pnpm install
```

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
[TypeORM-seeding](https://github.com/w3tecch/typeorm-seeding)
[Exploring Nestjs module system](https://javascript.plainenglish.io/exploring-nestjs-nests-module-system-88c6d7ad0970)
[migrations-missing-required-argument-datasource](https://stackoverflow.com/questions/71803499/typeorm-when-trying-to-run-migrations-missing-required-argument-datasource)
[pecify-the-migrations-directory-for-typeorm-cli](https://stackoverflow.com/questions/71879806/how-can-i-specify-the-migrations-directory-for-typeorm-cli)
[Article about TypeORM migrations in Nest](https://www.daz.dev/typeorm-migrations-for-nestjs/)