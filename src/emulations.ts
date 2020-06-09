export interface Class<T> extends Function {
  new (...args: any[]): T;
}
export type Enum<E> = Record<keyof E, number | string> & { [key: number]: string };

/* Deprecated; use `Primitive` */
export type Literal = boolean | number | string;

export type Primitive = bigint | boolean | number | string | symbol;
