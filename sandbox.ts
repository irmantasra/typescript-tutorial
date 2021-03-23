let age: any;

age = 30;

console.log({ age });

age = ["20"];
console.log({ age });
age = true;
console.log({ age });

let mixed: any[] = [];
mixed.push("mario");
mixed.push(true);
mixed.push(20);

console.log({ mixed });

let ninja: {
  name: any;
  age: any;
};

ninja = { name: "yoshi", age: 15 };

console.log({ ninja });

ninja = { name: 10, age: true };
console.log({ ninja });
