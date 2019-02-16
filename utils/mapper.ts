export class Mapper {
  static omit<T, K extends keyof T>(objectToOmit: T, props: K[]): Pick<T, Exclude<keyof T, K>> {
    return Object
      .keys(objectToOmit)
      .filter(key => !props.includes(key as K))
      .reduce(
        (object, key) => Object.assign(object, { [key]: objectToOmit[key] }),
        {} as Pick<T, Exclude<keyof T, K>>,
      );
  }
}
