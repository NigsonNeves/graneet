import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CitiesController } from './cities.controller';
import { CitySchema } from './cities.model';
import { CitiesService } from './cities.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'City', schema: CitySchema }]),
    HttpModule,
  ],
  controllers: [CitiesController],
  providers: [CitiesService],
})
export class CitiesModule {}
