/** сужение типа "просто строка" - требует явного приведения */
export type TColorString = string & { __brand: 'color' };