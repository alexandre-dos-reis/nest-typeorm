import { ConnectionOptions } from "typeorm-seeding";
import typeOrmModuleOptions from "./database.config";

export default {
  ...typeOrmModuleOptions,
  seeds: ["src/database/seeds/**/*{.ts,.js}"],
  factories: ["src/database/factories/**/*{.ts,.js}"],
} as ConnectionOptions;
