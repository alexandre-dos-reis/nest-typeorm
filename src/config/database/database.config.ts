import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { glob } from "glob";
import { join } from "path";
import "dotenv/config";

export default {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: glob.sync(join(__dirname, "../../") + "**/*.entity{.ts,.js}"),
  synchronize: process.env.SYNC === "TRUE" ?? false, // DO NOT USE IN PRODUCTION
} as TypeOrmModuleOptions;
