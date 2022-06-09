import { Factory, Seeder } from "typeorm-seeding";
import { Article } from "src/article/article.entity";

export default class CreateArticles implements Seeder {
  public async run(factory: Factory): Promise<any> {
    await factory(Article)().createMany(10);
  }
}
