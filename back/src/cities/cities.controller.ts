import { Controller, Get, Query } from '@nestjs/common';
import { City, FilteredCity } from './cities.model';
import { CitiesService } from './cities.service';

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get()
  async getCities(): Promise<City[]> {
    return await this.citiesService.getCities();
  }

  @Get('/findByFilter?')
  async getFilteredCities(
    @Query('query') query: string,
  ): Promise<FilteredCity> {
    return await this.citiesService.getFilteredCities(query);
  }
}
