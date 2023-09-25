// tsc 'filename.ts' - w , auto compile every save
// Can't change the type of a variable, even if declared with let
// Basics
// let char = "yoshi";
// let age = 30;
// Type check in function
// const circ = (diameter: number) => diameter * Math.PI;
// console.log(circ(7.5));
// Arrays
var arr = ["hello", "goodbye", "night"];
arr.push("morning");
// TypeScript only allows pushing of same type, err
// arr.push(3);
var arrMixed = [2, "hello", 4, "goodbye"];
// Allows pushing of any types already present in array
arrMixed.push("night");
// Objects
// Can't later change types of properties
var obj = {
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
// Explicit types - variables
var username;
var age;
var isLoggedIn;
username = "barrmoonshine";
age = 1000000;
isLoggedIn = true;
// Explicit types, arrays
var posts = []; // posts an array of strings, initialise with empty value
posts = ["hello world", "my first post"];
posts.push("cool post"); // Must initialise with value of empty array before mutating
console.log(posts);
// Union types, what types are allowed, example array
var mixed = [];
mixed.push("hello");
mixed.push(100);
console.log(mixed);
// Example string with union types
var uid;
uid = 123;
uid = "123";
// Objects
var myObj; // Note array is a type of object
myObj = { message: "hello", likes: 50, published: true };
var myObjTwo; // Stricter object setting, array would not be allowed
