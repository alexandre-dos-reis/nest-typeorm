import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { Article } from "./article.entity";

@Injectable()
export class ArticleService {
  private articleRepository: Repository<Article>;

  constructor(
    @InjectRepository(Article)
    articleRepository: Repository<Article>
  ) {
    this.articleRepository = articleRepository;
  }

  findAll(): Promise<Article[]> {
    return this.articleRepository.findBy({ isOnline: true });
  }

  find(id: number): Promise<Article> {
    return this.articleRepository.findOneBy({ id, isOnline: true });
  }

  update(id: number, article: Article): Promise<UpdateResult> {
    return this.articleRepository.update(+id, article);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.articleRepository.delete(+id);
  }

  create(article: Article): Article {
    return this.articleRepository.create(article);
  }
}
