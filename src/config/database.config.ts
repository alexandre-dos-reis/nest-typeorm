import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { join } from "path";

export default () =>
  ({
    type: process.env.DB_TYPE || "postgres",
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "password",
    database: process.env.DB_NAME || "nest",
    //logging: process.env.DB_LOGGING === "true",
    entities: [join(__dirname, "../", "**/*.entity.ts")],
    //migrations: [join(__dirname, "../", "database/migrations/**/*.ts")],
    synchronize: process.env.DB_SYNC === "TRUE",
    //dropSchema: process.env.DB_DROP_SCHEMA === "true",
    //migrationsRun: process.env.DB_MIGRATIONS_RUN === "true",
  } as TypeOrmModuleOptions);
