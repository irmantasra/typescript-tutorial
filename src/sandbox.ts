type StringOrNum = string | number;
type objWithName = { name: string; uid: StringOrNum };

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

logDetails("5862594125", "daiktas");

const greet = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};

greet({ name: "irmantas", uid: 1546821 });
