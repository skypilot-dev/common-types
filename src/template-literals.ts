import { Primitive } from './emulation';
import { Integer } from './pseudo';

type HttpScheme = 'http' | 'https';

export type HttpUrl = `${HttpScheme}://${string}` | `https://${string}`;

export type BooleanString = StringifiedPrimitive<boolean>;

export type IntegerString = StringifiedPrimitive<Integer>;

export type NullString = StringifiedPrimitive<null>;

export type NumberString = StringifiedPrimitive<number>;

export type StringifiedPrimitive<
  T extends bigint | boolean | null | number | string | undefined = Primitive | null | undefined
>  = `${T}`;
