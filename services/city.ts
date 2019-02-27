import { CityAttributes } from '../entities';
import { db } from '../db';

export class CityService {
  static async findAll(): Promise<CityAttributes[]> {
    return db.City.find();
  }

  static async create(city: CityAttributes): Promise<CityAttributes> {
    return db.City.create(city);
  }

  static async remove(id: number): Promise<CityAttributes> {
    return db.City.findByIdAndRemove(id);
  }

  static async upsert(id: number, cityProps: Partial<CityAttributes>): Promise<CityAttributes> {
    return db.City.findOneAndUpdate({ id }, cityProps, { upsert: true });
  }
}
