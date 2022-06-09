import { ConfigService, ConfigModule } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import { glob } from "glob";
import { join } from "path";

export default {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (ConfigService: ConfigService) => ({
    type: ConfigService.get("DB_TYPE"),
    host: ConfigService.get("DB_HOST"),
    port: ConfigService.get("DB_PORT"),
    username: ConfigService.get("DB_USER"),
    password: ConfigService.get("DB_PASS"),
    database: ConfigService.get("DB_NAME"),
    entities: glob.sync(join(__dirname, "../") + "**/*.entity{.ts,.js}"),
    synchronize: ConfigService.get("SYNC") === "TRUE" ?? false, // DO NOT USE IN PRODUCTION
  }),
} as TypeOrmModuleAsyncOptions;
