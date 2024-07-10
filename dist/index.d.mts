declare enum Unit {
    ms = 0,
    s = 1,
    m = 2,
    hr = 3,
    d = 4,
    wk = 5
}
declare function randomint(min: number, max: number): number;
declare function randomfloat(min: number, max: number, round?: number, withzero?: boolean): number | string;
declare function degrees(rads: number): number;
declare function radians(degs: number): number;
declare function t2ms(time: number, unit: Unit): number;
declare function t2secs(time: number, unit: Unit): number;
declare function t2mins(time: number, unit: Unit): number;
declare function t2hrs(time: number, unit: Unit): number;
declare function t2days(time: number, unit: Unit): number;
declare function t2wks(time: number, unit: Unit): number;
declare function shufflearr(arr: any[]): any[];
declare function splitarr(arr: any[], size: number): any[][];
declare function getrandomfromarr(arr: any[]): string;
declare function factorialBigInt(n: number): string;
declare function factorial(n: number): number | RangeError;
declare function HexEncodeascii(string: string): string;
declare function HexEncodeuni(string: string): string;
declare function HexDecodeuni(string: string): string;
declare function HexDecodeascii(string: string): string;
declare function BinaryEncode(string: string, bits?: number): string | Error;
declare function BinaryDecode(string: string): string;
declare function Tetration(base: number, height: number): number | RangeError | Error;

export { BinaryDecode, BinaryEncode, HexDecodeascii, HexDecodeuni, HexEncodeascii, HexEncodeuni, Tetration, Unit, degrees, factorial, factorialBigInt, getrandomfromarr, radians, randomfloat, randomint, shufflearr, splitarr, t2days, t2hrs, t2mins, t2ms, t2secs, t2wks };
