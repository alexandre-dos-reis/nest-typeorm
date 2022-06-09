import { define } from "typeorm-seeding";
import { Article } from "../../article/article.entity";
import { faker } from "@faker-js/faker";

define(Article, () => {
  const article = new Article();
  article.title = faker.random.words();
  article.content = faker.random.words(50);
  article.isOnline = true;
  return article;
});
