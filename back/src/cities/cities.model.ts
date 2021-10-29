import * as mongoose from 'mongoose';

export interface FilteredCity {
  metropolitan: City[];
  overseas: City[];
}

export interface City {
  codePostal: string;
  codeCommune: string;
  nomCommune: string;
  libelleAcheminement: string;
}

export const CitySchema = new mongoose.Schema({
  codePostal: {
    type: String,
    required: true,
  },
  codeCommune: {
    type: String,
    required: true,
  },
  nomCommune: {
    type: String,
    required: true,
  },
  libelleAcheminement: {
    type: String,
    required: true,
  },
});
