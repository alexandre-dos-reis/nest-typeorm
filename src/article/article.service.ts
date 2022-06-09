import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
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

  findOne(id: string): Promise<Article> {
    return this.articleRepository.findOneBy({ id, isOnline: true });
  }

  updateOne(id: string, article: Article): Promise<UpdateResult> {
    return this.articleRepository.update(+id, article);
  }

  deleteOne(id: string): Promise<DeleteResult> {
    return this.articleRepository.delete(+id);
  }

  createOne(article: Article): Promise<Article> {
    return this.articleRepository.save(article);
  }
}
