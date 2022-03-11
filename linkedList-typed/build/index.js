"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const CharCollection_1 = require("./CharCollection");
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
const charCollection = new CharCollection_1.CharCollection("PoZa");
const sorter = new Sorter_1.Sorter(charCollection);
sorter.sort();
console.log(charCollection.data);
