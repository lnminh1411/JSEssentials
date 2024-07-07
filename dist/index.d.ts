declare enum Unit {
    ms = 0,
    s = 1,
    m = 2,
    hr = 3,
    d = 4,
    wk = 5
}
declare function randomint(min: number, max: number): number;
declare function randomfloat(min: number, max: number, round?: number): number;
declare function degrees(radians: number): number;
declare function radians(degrees: number): number;
declare function toms(time: number, unit: Unit): number;
declare function tosecs(time: number, unit: Unit): number;
declare function tomins(time: number, unit: Unit): number;
declare function tohrs(time: number, unit: Unit): number;
declare function todays(time: number, unit: Unit): number;
declare function towks(time: number, unit: Unit): number;
declare function shuffarr(arr: any[]): any[];
declare function splitarr(arr: any[], size: number): any[][];
declare function getrandomitemfromarr(arr: any[]): string;
declare function factorialBigInt(n: number): string;
declare function factorial(n: number): number;

export { Unit, degrees, factorial, factorialBigInt, getrandomitemfromarr, radians, randomfloat, randomint, shuffarr, splitarr, todays, tohrs, tomins, toms, tosecs, towks };
