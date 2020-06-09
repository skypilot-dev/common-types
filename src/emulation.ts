export interface Class<T> extends Function {
  new (...args: unknown[]): T;
}

export type Enum<E> = Record<keyof E, number | string> & { [key: number]: string };

export type Primitive = boolean | number | string;
