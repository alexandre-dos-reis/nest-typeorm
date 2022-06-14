import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ArticleService } from "./article.service";
import { Article } from "./article.entity";

@Controller("articles")
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  getAllArticles() {
    return this.articleService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.articleService.find(+id);
  }

  @Post()
  create(@Body() article: Article) {
    return this.articleService.create(article);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() article: Article) {
    return this.articleService.update(+id, article);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.articleService.delete(+id);
  }
}
