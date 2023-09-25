let greet: Function;

greet = () => {
  console.log("hello world");
};

// Optional function parameter with optional chaining, default parameter with equals
const add = (a: number, b: number, c: number = 10) => {
  console.log(a + b + c);
};

add(5, 10);

// Colon and then the type explicity confirms the type being returned by the number
const minus = (a: number, b: number): number => {
  return a + b;
};

// Type inferred by the returned value of minus
let result = minus(10, 7);

// Type aliases

type userDetails = { username: string; totalPosts: number; password: string };

const logInUser = (user: userDetails) => {
  console.log(
    `Hello ${user.username}, you have a posted ${user.totalPosts} times`
  );
};
