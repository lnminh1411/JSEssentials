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
  Unit: () => Unit,
  degrees: () => degrees,
  factorial: () => factorial,
  factorialBigInt: () => factorialBigInt,
  getrandomitemfromarr: () => getrandomitemfromarr,
  radians: () => radians,
  randomfloat: () => randomfloat,
  randomint: () => randomint,
  shuffarr: () => shuffarr,
  splitarr: () => splitarr,
  todays: () => todays,
  tohrs: () => tohrs,
  tomins: () => tomins,
  toms: () => toms,
  tosecs: () => tosecs,
  towks: () => towks
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
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomfloat(min, max, round) {
  if (!round) {
    return Math.random() * (max - min + 1) + min;
  } else {
    var roundto = Math.pow(10, round);
    return Math.round((Math.random() * (max - min + 1) + min) * roundto) / roundto;
  }
}
function degrees(radians2) {
  return radians2 * (180 / Math.PI);
}
function radians(degrees2) {
  return degrees2 * (Math.PI / 180);
}
function toms(time, unit) {
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
function tosecs(time, unit) {
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
function tomins(time, unit) {
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
function tohrs(time, unit) {
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
function todays(time, unit) {
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
function towks(time, unit) {
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
function shuffarr(arr) {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  ;
  return newArr;
}
function splitarr(arr, size) {
  const newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  ;
  return newArr;
}
function getrandomitemfromarr(arr) {
  if (arr.length === 0) {
    return "undefined";
  } else {
    const ind = Math.floor(Math.random() * arr.length);
    const result = arr.splice(ind, 1)[0];
    return result;
  }
}
function factorialBigInt(n) {
  let result = 1n;
  for (let i = 1n; i <= n; i++) {
    result *= i;
  }
  let numresult = String(result);
  return numresult;
}
function factorial(n) {
  if (n <= 170) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  } else {
    return Infinity;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Unit,
  degrees,
  factorial,
  factorialBigInt,
  getrandomitemfromarr,
  radians,
  randomfloat,
  randomint,
  shuffarr,
  splitarr,
  todays,
  tohrs,
  tomins,
  toms,
  tosecs,
  towks
});
