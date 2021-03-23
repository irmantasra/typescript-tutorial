let greet: Function;

greet = () => {
  console.log("hello, world");
};

greet();

const add = (a: number, b: number, c: number = 10) => {
  console.log(a + b + c);
};

add(5, 10);

const minus = (a: number, b: number): number => {
  return a + b;
};

let result: number = minus(10, 7);
