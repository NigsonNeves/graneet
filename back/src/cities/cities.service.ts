import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AxiosResponse } from 'axios';
import { Model } from 'mongoose';
import { firstValueFrom, map, Observable } from 'rxjs';
import { City, FilteredCity } from './cities.model';

@Injectable()
export class CitiesService {
  constructor(
    @InjectModel('City') private readonly cityModel: Model<City>,
    private readonly httpService: HttpService,
  ) {}

  async getCities(): Promise<City[]> {
    try {
      return await this.cityModel.find().limit(100);
    } catch (error) {}
  }

  async getFilteredCities(query: string): Promise<FilteredCity> {
    try {
      const regexPattern = `^${query}.*$`;

      const result: Array<FilteredCity> = await this.cityModel.aggregate([
        {
          $match: {
            $or: [
              { codePostal: { $regex: regexPattern, $options: '$i' } },
              { codeCommune: { $regex: regexPattern, $options: '$i' } },
              { nomCommune: { $regex: regexPattern, $options: '$i' } },
              { libelleAcheminement: { $regex: regexPattern, $options: '$i' } },
            ],
          },
        },
        { $limit: 100 },
        { $sort: { nomCommune: 1 } },
        {
          $facet: {
            metropolitan: [
              {
                $match: { $expr: { $lt: [{ $toInt: '$codePostal' }, 95999] } },
              },
              { $project: { _id: 0 } },
            ],
            overseas: [
              {
                $match: { $expr: { $gt: [{ $toInt: '$codePostal' }, 96000] } },
              },
              { $project: { _id: 0 } },
            ],
          },
        },
      ]);

      return result[0];
    } catch (error) {}
  }

  async importCities(): Promise<void> {
    try {
      console.log('Starting importation...');
      const request: Observable<AxiosResponse<City[]>> = this.httpService
        .get(
          'https://www.data.gouv.fr/fr/datasets/r/34d4364c-22eb-4ac0-b179-7a1845ac033a',
        )
        .pipe(map((res) => res));

      const citiesToImport: AxiosResponse<City[]> = await firstValueFrom(
        request,
      );

      await this.cityModel.insertMany(citiesToImport.data);

      console.log('Cities imported to database');
    } catch (error) {}
  }
}
