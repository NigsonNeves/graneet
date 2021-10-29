import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitiesModule } from './cities/cities.module';

@Module({
  imports: [
    CitiesModule,
    MongooseModule.forRoot('mongodb://mongo:27017/cities'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
