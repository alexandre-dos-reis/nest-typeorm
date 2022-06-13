import { ConnectionOptions } from "typeorm-seeding";
import databaseConfig from "./database.config";
import "dotenv/config";

export default {
  ...databaseConfig(),
  seeds: ["src/database/seeds/**/*{.ts,.js}"],
  factories: ["src/database/factories/**/*{.ts,.js}"],
} as ConnectionOptions;
