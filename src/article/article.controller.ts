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
  private readonly articleService: ArticleService;

  constructor(articleService: ArticleService) {
    this.articleService = articleService;
  }

  @Get()
  findAll() {
    return this.articleService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.articleService.findOne(id);
  }

  @Post()
  create(@Body() article: Article) {
    return this.articleService.createOne(article);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() article: Article) {
    return this.articleService.updateOne(id, article);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.articleService.deleteOne(id);
  }
}
