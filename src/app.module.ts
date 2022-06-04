import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
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
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [Article],
      synchronize: true,
    }),
    ArticleModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
