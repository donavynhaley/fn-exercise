import {
  once,
  onceAndAfter,
  onceNoVar,
  alternator,
  callThisManyTime,
} from "./libs/hof";

export const squeak = (text) => console.log(`${text} squeak`);
export const creak = (text) => console.log(`${text} creak`);

squeak("Mouse");
squeak("Mouse");
squeak("Parrot");

export const squeakOnce = once(squeak);
squeakOnce("Mouse");
squeakOnce("Mouse");
squeakOnce("Mouse");
squeakOnce("Parrot");

export const makeSound = onceAndAfter(squeak, creak);
makeSound("door");
makeSound("door");
makeSound("door");
makeSound("door");

const squeakOnce1 = onceNoVar(squeak);
squeakOnce1("PipSqueak");
squeakOnce1("PipSqueak");
squeakOnce1("PipSqueak");

let sayA = () => {
  console.log("A");
};
let sayB = () => {
  console.log("B");
};
let sayLetter = alternator(sayA, sayB);
sayLetter();
sayLetter();
sayLetter();
sayLetter();
sayLetter();

let squeak5Times = callThisManyTime(squeak, 3);
squeak5Times("Nikki");
squeak5Times("Nikki2");
squeak5Times("Nikki3");
squeak5Times("Nikki4");
