import { Omit } from '../entities';

export class Mapper {
  static omit<T, K extends keyof T>(objectToOmit: T, props: K[]): Omit<T, K> {
    return Object
      .keys(objectToOmit)
      .filter(key => !props.includes(key as K))
      .reduce(
        (object, key) => Object.assign(object, { [key]: objectToOmit[key] }),
        {} as Omit<T, K>,
      );
  }
}
