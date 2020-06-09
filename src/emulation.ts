export interface Class<T> extends Function {
  new (...args: any[]): T;
}

export type Enum<E> = Record<keyof E, number | string> & { [key: number]: string };

export type Literal = boolean | number | string;
