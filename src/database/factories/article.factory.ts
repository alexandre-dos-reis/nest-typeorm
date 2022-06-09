import { define } from "typeorm-seeding";
import { Article } from "src/article/article.entity";
import { faker } from "@faker-js/faker";

define(Article, () => {
  const article = new Article();
  article.id = faker.datatype.uuid();
  article.title = faker.random.words();
  article.content = faker.random.words(50);
  article.isOnline = true;
  article.createdAt = faker.date.past();
  article.updatedAt = faker.date.past();
  return article;
});
