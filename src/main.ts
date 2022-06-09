import { ConfigService } from "@nestjs/config";
import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

(async () => {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const logger = new Logger();
  const port = config.get("SERVER_PORT") ?? 3000;

  await app.listen(port, () => {
    logger.log(`Server is listening on http://localhost:${port}`);
  });
})();
