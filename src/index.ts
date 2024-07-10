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

export function randomfloat(min: number, max: number, round?: number, withzero?: boolean): number | string {
    if (withzero === true) {
        if (!round) {
            return Math.random() * (max - min + 1);
        }else{
            return (Math.random() * (max - min + 1)).toFixed(round);
        }
    }else{
            if (!round) {
                return Math.round(Math.random() * (max - min + 1));
            }else{
                return parseFloat((Math.random() * (max - min + 1)).toFixed(round));
            }
         }        

}


export function degrees (rads: number): number {
    return rads * (180.0 / Math.PI);
}

export function radians (degs: number): number {
    return degs * (Math.PI / 180.0);
}

export function t2ms(time: number, unit: Unit): number {
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

export function t2secs(time: number, unit: Unit): number {
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

export function t2mins(time: number, unit: Unit): number {
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

export function t2hrs(time: number, unit: Unit): number {
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

export function t2days(time: number, unit: Unit): number {
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

export function t2wks(time: number, unit: Unit): number {
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

export function shufflearr(arr: any[]): any[] {
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

export function getrandomfromarr(arr: any[]): string {
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

    for (let i = 1n; i <= Math.ceil(n); i++) {
        result *= i;
    }
    let numresult = String(result)
    return numresult;
}

export function factorial(n: number): number | RangeError {
    if (Math.ceil(n)<= 170) {
        let result = 1;

        for (let i = 1; i <= Math.ceil(n); i++) {
            result *= i;
        }
        return result;
    }else{
        return RangeError("Value must be between 0 and 170! Use factorialBigInt() for bigger values!");
    }
}

export function HexEncodeascii(string: string): string {
	var arr = [];
	for (var n = 0, l = string.length; n < l; n ++) {
		var hex = Number(string.charCodeAt(n)).toString(16);
		arr.push(hex);
    }
	return arr.join('').toUpperCase();
}

export function HexEncodeuni(string: string): string {
    var hex = '';
    var result = '';
    for (var i = 0; i < string.length; i++) {
        hex = string.charCodeAt(i).toString(16);
        result += ("000"+hex).slice(-4);
    }
    return result.toUpperCase();
}

export function HexDecodeuni(string: string): string {
    var hex = string.match(/.{1,4}/g) || [];
    var result = "";
    for(let i = 0; i < hex.length; i++) {
        result += String.fromCharCode(parseInt(hex[i] ?? "", 16));
    }

    return result;
}

export function HexDecodeascii(string: string): string {
    var hex = string.toString()
    var result = '';
    for (var i = 0; i < hex.length; i += 2)
        result += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return result;
}

//Binary encode and decode for ascii only! (yet or probably forever idk)

export function BinaryEncode(string: string, bits?: number): string | Error {
    var result = "";
    if (bits) {
        if (bits >= 8) {
            for (let i = 0; i < string.length; i++) {
                var bin = string.charCodeAt(i).toString(2);
                result += Array(Math.ceil(bits) - bin.length + 1).join("0") + bin;
            }
        }else{
            return Error("Minimum number of bits per character must be 8!")
        }
    }else{
    for (let i = 0; i < string.length; i++) {
        var bin = string.charCodeAt(i).toString(2);
        result += Array(8 - bin.length + 1).join("0") + bin;
    }} 
    return result;
}

export function BinaryDecode(string: string): string {
     var result = "";
     var arr = string.match(/.{1,8}/g) || [];
     for (var i = 0; i < arr.length; i++) {
        result += String.fromCharCode(parseInt(arr[i] ?? "", 2))
    }
    return result;
}

export function Tetration(base: number, height: number): number | RangeError | Error{
    if (!Number.isInteger(base) || !Number.isInteger(height)) {
        return Error("Only accept interger numbers!")
    }
    let result = base;
    for (var i = 1; i < height; i++) {
        result = Math.pow(base,result);
    }
    if (result === Infinity) {
        return RangeError("Calculation exceeded 1e309! (Can't perform Tetration with BigInt)"); //Create a PR on this if you know how to do Tetration with BigInt, thanks! (ngl it took me 5hrs to research about this)
    }
    return result
}