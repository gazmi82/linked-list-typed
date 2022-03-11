import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharCollection } from "./CharCollection";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const charCollection = new CharCollection("PoZa");

const sorter = new Sorter(charCollection);
sorter.sort();
console.log(charCollection.data);
