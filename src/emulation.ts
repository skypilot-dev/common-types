export interface Class<T> extends Function {
  new (...args: unknown[]): T;
}

export type Enum<E> = Record<keyof E, number | string> & { [key: number]: string };

/* @deprecated Use `Primitive` instead */
export type Literal = boolean | number | string;

export type Primitive = bigint | boolean | number | string;
