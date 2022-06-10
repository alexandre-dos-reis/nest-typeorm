import { DataSource, DataSourceOptions } from "typeorm";
import typeOrmModuleOptions from "./database.config";

export const connectionSource = new DataSource({
  ...(typeOrmModuleOptions as DataSourceOptions),
  migrations: ["src/database/migrations/**/*{.ts,.js}"],
});

connectionSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
