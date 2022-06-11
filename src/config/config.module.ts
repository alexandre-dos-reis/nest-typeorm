import { Module } from "@nestjs/common";
import * as Nest from "@nestjs/config";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DataSource } from "typeorm";
import typeOrmModuleOptions from "./database/database.config";

@Module({
  imports: [
    Nest.ConfigModule.forRoot({
      envFilePath: [".env"],
      isGlobal: true,
      cache: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => typeOrmModuleOptions,
    }),
  ],
})
export class ConfigModule {
  constructor(private dataSource: DataSource) {}
}
