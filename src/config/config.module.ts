import { Module } from "@nestjs/common";
import * as NestConfig from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DataSource } from "typeorm";
import databaseConfig from "./database.config";

@Module({
  imports: [
    NestConfig.ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    TypeOrmModule.forRootAsync(databaseConfig),
  ],
})
export class ConfigModule {
  constructor(private dataSource: DataSource) {}
}
