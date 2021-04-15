/* eslint-disable @typescript-eslint/no-explicit-any */

export type AnyRecord = Record<string, any>;

export type EmptyObject = { [key: string]: never; [key: number]: never };

export type Falsy = false | 0 | '' | null | undefined;
