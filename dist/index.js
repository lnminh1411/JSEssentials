"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  BinaryDecode: () => BinaryDecode,
  BinaryEncode: () => BinaryEncode,
  HexDecodeascii: () => HexDecodeascii,
  HexDecodeuni: () => HexDecodeuni,
  HexEncodeascii: () => HexEncodeascii,
  HexEncodeuni: () => HexEncodeuni,
  Unit: () => Unit,
  degrees: () => degrees,
  factorial: () => factorial,
  factorialBigInt: () => factorialBigInt,
  getrandomfromarr: () => getrandomfromarr,
  radians: () => radians,
  randomfloat: () => randomfloat,
  randomint: () => randomint,
  shufflearr: () => shufflearr,
  splitarr: () => splitarr,
  t2days: () => t2days,
  t2hrs: () => t2hrs,
  t2mins: () => t2mins,
  t2ms: () => t2ms,
  t2secs: () => t2secs,
  t2wks: () => t2wks
});
module.exports = __toCommonJS(src_exports);
var Unit = /* @__PURE__ */ ((Unit2) => {
  Unit2[Unit2["ms"] = 0] = "ms";
  Unit2[Unit2["s"] = 1] = "s";
  Unit2[Unit2["m"] = 2] = "m";
  Unit2[Unit2["hr"] = 3] = "hr";
  Unit2[Unit2["d"] = 4] = "d";
  Unit2[Unit2["wk"] = 5] = "wk";
  return Unit2;
})(Unit || {});
function randomint(min, max) {
  if (!min) {
    return Error("Please provide a Minimum value!");
  }
  if (!max) {
    return Error("Please provide a Maximum value!");
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
function randomfloat(min, max, round) {
  if (!min) {
    return Error("Please provide a Minimum value!");
  }
  if (!max) {
    return Error("Please provide a Maximum value!");
  }
  if (!round) {
    return Math.random() * (max - min + 1) + min;
  } else {
    var roundto = Math.pow(10, round);
    return Math.round((Math.random() * (max - min + 1) + min) * roundto) / roundto;
  }
}
function degrees(rads) {
  if (!rads) {
    return Error("Please provide a value in Radians!");
  } else {
    return rads * (180 / Math.PI);
  }
}
function radians(degs) {
  if (!degs) {
    return Error("Please provide a value in Degrees!");
  }
  return degs * (Math.PI / 180);
}
function t2ms(time, unit) {
  switch (unit) {
    case 0 /* ms */:
      return time;
    case 1 /* s */:
      return time * 1e3;
    case 2 /* m */:
      return time * 6e4;
    case 3 /* hr */:
      return time * 36e5;
    case 4 /* d */:
      return time * 864e5;
    case 5 /* wk */:
      return time * 6048e5;
  }
  ;
}
function t2secs(time, unit) {
  switch (unit) {
    case 0 /* ms */:
      return time / 1e3;
    case 1 /* s */:
      return time;
    case 2 /* m */:
      return time * 60;
    case 3 /* hr */:
      return time * 3600;
    case 4 /* d */:
      return time * 86400;
    case 5 /* wk */:
      return time * 604800;
  }
  ;
}
function t2mins(time, unit) {
  switch (unit) {
    case 0 /* ms */:
      return time / 6e4;
    case 1 /* s */:
      return time / 60;
    case 2 /* m */:
      return time;
    case 3 /* hr */:
      return time * 60;
    case 4 /* d */:
      return time * 1440;
    case 5 /* wk */:
      return time * 10080;
  }
  ;
}
function t2hrs(time, unit) {
  switch (unit) {
    case 0 /* ms */:
      return time / 36e5;
    case 1 /* s */:
      return time / 3600;
    case 2 /* m */:
      return time / 60;
    case 3 /* hr */:
      return time;
    case 4 /* d */:
      return time * 24;
    case 5 /* wk */:
      return time * 168;
  }
  ;
}
function t2days(time, unit) {
  switch (unit) {
    case 0 /* ms */:
      return time / 864e5;
    case 1 /* s */:
      return time / 86400;
    case 2 /* m */:
      return time / 1440;
    case 3 /* hr */:
      return time / 24;
    case 4 /* d */:
      return time;
    case 5 /* wk */:
      return time * 7;
  }
  ;
}
function t2wks(time, unit) {
  switch (unit) {
    case 0 /* ms */:
      return time / 6048e5;
    case 1 /* s */:
      return time / 604800;
    case 2 /* m */:
      return time / 10080;
    case 3 /* hr */:
      return time / 168;
    case 4 /* d */:
      return time / 7;
    case 5 /* wk */:
      return time;
  }
  ;
}
function shufflearr(arr) {
  if (!arr) {
    return Error("Please provide a Array!");
  }
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  ;
  return newArr;
}
function splitarr(arr, size) {
  if (!arr) {
    return Error("Please provide a Array!");
  }
  const newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  ;
  return newArr;
}
function getrandomfromarr(arr) {
  if (!arr) {
    return Error("Please provide a Array!");
  }
  if (arr.length === 0) {
    return "undefined";
  } else {
    const ind = Math.floor(Math.random() * arr.length);
    const result = arr.splice(ind, 1)[0];
    return result;
  }
}
function factorialBigInt(n) {
  if (!n) {
    return Error("Please provide a Number to perform the operation!");
  }
  let result = 1n;
  for (let i = 1n; i <= Math.ceil(n); i++) {
    result *= i;
  }
  let numresult = String(result);
  return numresult;
}
function factorial(n) {
  if (!n) {
    return Error("Please provide a Number to perform the operation!");
  }
  if (Math.ceil(n) <= 170) {
    let result = 1;
    for (let i = 1; i <= Math.ceil(n); i++) {
      result *= i;
    }
    return result;
  } else {
    return RangeError("Value must be between 0 and 170! Use factorialBigInt() for bigger values!");
  }
}
function HexEncodeascii(string) {
  var arr = [];
  if (!string) {
    return Error("Please provide a ASCII string to encode!");
  }
  for (var n = 0, l = string.length; n < l; n++) {
    var hex = Number(string.charCodeAt(n)).toString(16);
    arr.push(hex);
  }
  return arr.join("").toUpperCase();
}
function HexEncodeuni(string) {
  var hex = "";
  var result = "";
  if (!string) {
    return Error("Please provide a Unicode string to encode!");
  }
  for (var i = 0; i < string.length; i++) {
    hex = string.charCodeAt(i).toString(16);
    result += ("000" + hex).slice(-4);
  }
  return result.toUpperCase();
}
function HexDecodeuni(string) {
  var hex = string.match(/.{1,4}/g) || [];
  var result = "";
  if (!string) {
    return Error("Please provide a Hexadecimal string to decode!");
  } else {
    for (let i = 0; i < hex.length; i++) {
      result += String.fromCharCode(parseInt(hex[i] ?? "", 16));
    }
  }
  return result;
}
function HexDecodeascii(string) {
  var hex = string.toString();
  var result = "";
  if (!string) {
    return Error("Please provide a Hexadecimal string to decode!");
  }
  for (var i = 0; i < hex.length; i += 2)
    result += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  return result;
}
function BinaryEncode(string, bits) {
  var result = "";
  if (!string) {
    return Error("Please provide a string of ASCII characters to encode!");
  }
  if (bits) {
    if (bits >= 8) {
      for (let i = 0; i < string.length; i++) {
        var bin = string.charCodeAt(i).toString(2);
        result += Array(Math.ceil(bits) - bin.length + 1).join("0") + bin;
      }
    } else {
      return Error("Minimum number of bits per character must be 8!");
    }
  } else {
    for (let i = 0; i < string.length; i++) {
      var bin = string.charCodeAt(i).toString(2);
      result += Array(8 - bin.length + 1).join("0") + bin;
    }
  }
  return result;
}
function BinaryDecode(string) {
  if (!string) {
    return Error("Please provide a Binary string to decode!");
  } else {
    var result = "";
    var arr = string.match(/.{1,8}/g) || [];
    for (var i = 0; i < arr.length; i++) {
      result += String.fromCharCode(parseInt(arr[i] ?? "", 2));
    }
    return result;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BinaryDecode,
  BinaryEncode,
  HexDecodeascii,
  HexDecodeuni,
  HexEncodeascii,
  HexEncodeuni,
  Unit,
  degrees,
  factorial,
  factorialBigInt,
  getrandomfromarr,
  radians,
  randomfloat,
  randomint,
  shufflearr,
  splitarr,
  t2days,
  t2hrs,
  t2mins,
  t2ms,
  t2secs,
  t2wks
});
