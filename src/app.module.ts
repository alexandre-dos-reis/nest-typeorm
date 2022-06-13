import { Module } from "@nestjs/common";
import { ArticleModule } from "./article/article.module";
import { ConfigModule } from "./config/config.module";
import { DatabaseModule } from "./database/database.module";

@Module({
  imports: [ConfigModule, DatabaseModule, ArticleModule],
})
export class AppModule {}
