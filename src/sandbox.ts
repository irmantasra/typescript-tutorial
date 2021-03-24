let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
  console.log(`${name} ${greeting}`);
};

let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === "add") {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
};
