// tsc 'filename.ts' - w , auto compile every save

// Can't change the type of a variable, even if declared with let

// Basics
// let char = "yoshi";

// let age = 30;

// Type check in function
// const circ = (diameter: number) => diameter * Math.PI;

// console.log(circ(7.5));

// Arrays

const arr = ["hello", "goodbye", "night"];

arr.push("morning");
// TypeScript only allows pushing of same type, err
// arr.push(3);

const arrMixed = [2, "hello", 4, "goodbye"];

// Allows pushing of any types already present in array
arrMixed.push("night");

// Objects
// Can't later change types of properties
let obj = {
  name: "barry",
  age: 500,
  favColour: "green",
};

// You can reassign values to each property, but the object structure must stay the same
// I.e. can't remove or add new properties
obj = {
  name: "frank",
  age: 300,
  favColour: "pink",
};
