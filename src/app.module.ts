import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Article } from "./article/article.entity";
import { DataSource } from "typeorm";
import { ArticleModule } from "./article/article.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (ConfigService: ConfigService) => ({
        type: "postgres",
        host: ConfigService.get("DB_HOST"),
        port: ConfigService.get("DB_PORT"),
        username: ConfigService.get("DB_USER"),
        password: ConfigService.get("DB_PASS"),
        database: ConfigService.get("DB_NAME"),
        entities: [Article],
        synchronize: ConfigService.get("SYNC") === "TRUE", // DO NOT USE IN PRODUCTION
      }),
    }),
    ArticleModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
