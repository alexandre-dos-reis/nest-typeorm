import { Module } from "@nestjs/common";
import * as NestConfig from "@nestjs/config";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DataSource } from "typeorm";
import typeOrmAsyncConfig from "./database/database.config";

@Module({
  imports: [
    NestConfig.ConfigModule.forRoot({
      envFilePath: [".env"],
      isGlobal: true,
      cache: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => typeOrmAsyncConfig,
    }),
  ],
})
export class ConfigModule {
  constructor(private dataSource: DataSource) {}
}
