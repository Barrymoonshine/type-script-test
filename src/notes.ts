// // tsc 'filename.ts' - w , auto compile every save
// // tsc --init to create tsconfig

// // Can't change the type of a variable, even if declared with let

// // Basics
// // let char = "yoshi";

// // let age = 30;

// // Type check in function
// // const circ = (diameter: number) => diameter * Math.PI;

// // console.log(circ(7.5));

// // Arrays

// const arr = ["hello", "goodbye", "night"];

// arr.push("morning");
// // TypeScript only allows pushing of same type, err
// // arr.push(3);

// const arrMixed = [2, "hello", 4, "goodbye"];

// // Allows pushing of any types already present in array
// arrMixed.push("night");

// // Objects
// // Can't later change types of properties
// let obj = {
//   name: "barry",
//   age: 500,
//   favColour: "green",
// };

// // You can reassign values to each property, but the object structure must stay the same
// // I.e. can't remove or add new properties
// obj = {
//   name: "frank",
//   age: 300,
//   favColour: "pink",
// };

// // Explicit types - variables
// let username: string;
// let age: number;
// let isLoggedIn: boolean;

// username = "barrmoonshine";
// age = 1000000;
// isLoggedIn = true;

// // Explicit types, arrays
// let posts: string[] = []; // posts an array of strings, initialise with empty value

// posts = ["hello world", "my first post"];
// posts.push("cool post"); // Must initialise with value of empty array before mutating

// console.log(posts);

// // Union types, what types are allowed, example array
// let mixed: (string | number | boolean)[] = [];

// mixed.push("hello");
// mixed.push(100);

// console.log(mixed);

// // Example string with union types
// let uid: string | number;
// uid = 123;
// uid = "123";

// // Objects
// let myObj: object; // Note array is a type of object
// myObj = { message: "hello", likes: 50, published: true };

// let myObjTwo: {
//   message: string;
//   likes: number;
//   published: boolean;
// }; // Stricter object setting, array would not be allowed

// // Any type, can overwrite the any type
// let recipes: any;
