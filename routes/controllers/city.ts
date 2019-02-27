import { Response, Request, NextFunction } from 'express';

import { CityService } from '../../services';

export class CityController {
  static async getAllCities(req: Request, res: Response, next: NextFunction) {
    try {
      res.json(await CityService.findAll());
    } catch (err) {
      next(err);
    }
  }

  static async deleteCity(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await CityService.remove(+req.params.cityId);
      res.json(product);
    } catch (err) {
      next(err);
    }
  }

  static async upsertCity(req: Request, res: Response, next: NextFunction) {
    try {
      // TODO: validate 'req.body' object
      res.json(await CityService.upsert(+req.params.cityId, req.body));
    } catch (err) {
      next(err);
    }
  }

  static async addCity(req: Request, res: Response, next: NextFunction) {
    try {
      // TODO: validate 'req.body' object
      const city = await CityService.create(req.body);
      res.status(204).json(city);
    } catch (err) {
      next(err);
    }
  }
}
