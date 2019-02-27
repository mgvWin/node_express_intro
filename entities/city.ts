import { Document } from 'mongoose';

export interface CityAttributes {
  name: ​string​;
  country: string​;
  capital: boolean;
  location: {
    lat: number;
    long: ​number;
  };
  lastModifiedDate: number;
}

// Object of schema methods wthere we describe it
export interface CityModel extends CityAttributes, Document {}