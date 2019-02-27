import * as mongoose from 'mongoose';
import { CityModel } from '../../entities';

const CitySchema: mongoose.Schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name of the city is required'],
  },
  country: {
    type: String,
    required: [true, 'Country is required'],
  },
  capital: {
    type: Boolean,
    default: false,
  },
  location: {
    lat: {
      type: Number,
      required: true,
    },
    long: {
      type: Number,
      required: true,
    },
  },
  lastModifiedDate: Number,
});

CitySchema.pre<CityModel>('save', function (next) {
  this.lastModifiedDate = new Date().getTime();
  next();
});

export const CityFactory = (): mongoose.Model<CityModel> => mongoose.model('city', CitySchema);
