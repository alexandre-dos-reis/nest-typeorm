import { Module } from "@nestjs/common";
import { ArticleModule } from "./article/article.module";
import { ConfigModule } from "./config/config.module";

@Module({
  imports: [ConfigModule, ArticleModule],
})
export class AppModule {}
