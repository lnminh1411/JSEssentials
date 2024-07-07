export enum Unit {
    ms,
    s,
    m,
    hr,
    d,
    wk
};

export function randomint(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export function randomfloat(min: number, max: number, round?: number): number {
    if (!round) {
        return Math.random() * (max - min + 1) + min;
    }else{
        var roundto = Math.pow(10, round)
        return Math.round((Math.random() * (max - min + 1) + min) * roundto) / roundto;
    }
};

export function degrees (radians: number): number {
    return radians * (180.0 / Math.PI);
}

export function radians (degrees: number): number {
    return degrees * (Math.PI / 180.0);
}

export function toms(time: number, unit: Unit): number {
    switch (unit) {
        case Unit.ms:
            return time;
        case Unit.s:
            return time * 1000;
        case Unit.m:
            return time * 60000;
        case Unit.hr:
            return time * 3600000;
        case Unit.d:
            return time * 86400000;
        case Unit.wk:
            return time * 604800000;
    };
};

export function tosecs(time: number, unit: Unit): number {
    switch (unit) {
        case Unit.ms:
            return time / 1000;
        case Unit.s:
            return time;
        case Unit.m:
            return time * 60;
        case Unit.hr:
            return time * 3600;
        case Unit.d:
            return time * 86400;
        case Unit.wk:
            return time * 604800;
    };
};

export function tomins(time: number, unit: Unit): number {
    switch (unit) {
        case Unit.ms:
            return time / 60000;
        case Unit.s:
            return time / 60;
        case Unit.m:
            return time;
        case Unit.hr:
            return time * 60;
        case Unit.d:
            return time * 1440;
        case Unit.wk:
            return time * 10080;
    };
};

export function tohrs(time: number, unit: Unit): number {
    switch (unit) {
        case Unit.ms:
            return time / 3600000;
        case Unit.s:
            return time / 3600;
        case Unit.m:
            return time / 60;
        case Unit.hr:
            return time;
        case Unit.d:
            return time * 24;
        case Unit.wk:
            return time * 168;
    };
};

export function todays(time: number, unit: Unit): number {
    switch (unit) {
        case Unit.ms:
            return time / 86400000;
        case Unit.s:
            return time / 86400;
        case Unit.m:
            return time / 1440;
        case Unit.hr:
            return time / 24;
        case Unit.d:
            return time;
        case Unit.wk:
            return time * 7;
    };
};

export function towks(time: number, unit: Unit): number {
    switch (unit) {
        case Unit.ms:
            return time / 604800000;
        case Unit.s:
            return time / 604800;
        case Unit.m:
            return time / 10080;
        case Unit.hr:
            return time / 168;
        case Unit.d:
            return time / 7;
        case Unit.wk:
            return time;
    };
};

export function shuffarr(arr: any[]): any[] {
    const newArr = [...arr];

    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    };

    return newArr;
};

export function splitarr(arr: any[], size: number): any[][] {
    const newArr = [];

    for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
    };

    return newArr;
};

export function getrandomitemfromarr(arr: any[]): string {
    if (arr.length === 0) {
        return "undefined";
    }
    else {
        const ind =
            Math.floor(Math.random() * arr.length);
        const result = arr.splice(ind, 1)[0];
        return result;
    } 
}

export function factorialBigInt(n: number): string {
    let result = 1n;

    for (let i = 1n; i <= n; i++) {
        result *= i;
    }
    let numresult = String(result)
    return numresult;
}

export function factorial(n: number): number {
    if (n <= 170) {
        let result = 1;

        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }else{
        return Infinity;
    }
}