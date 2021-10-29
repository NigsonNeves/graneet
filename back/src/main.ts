import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CitiesService } from './cities/cities.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const citiesService = app.get(CitiesService);

  await citiesService.importCities().then(() => {
    app.listen(4000);
  });
}
bootstrap();
console.log('Server is listenning');
