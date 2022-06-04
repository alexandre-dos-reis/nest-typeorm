import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Article } from "./article.entity";

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private articleRepository: Repository<Article>
  ) {}

  findAll(): Promise<Article[]> {
    return this.articleRepository.findBy({ isOnline: true });
  }

  findOne(id: number): Promise<Article> {
    return this.articleRepository.findOneBy({ id, isOnline: true });
  }
}
