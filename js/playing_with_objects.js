var users = [
  { name: "Michael", age: 37 },
  { name: "John", age: 30 },
  { name: "David", age: 27 },
];
console.log(`John is ${users[1]["age"]} years old`);
console.log(`The name of the first object is ${users[0]["name"]}`);

function printUsers(obj) {
  for (var i = 0; i < users.length; i++) {
    console.log(`${obj[i]["name"]} is ${obj[i]["age"]} years old.`);
  }
}
printUsers(users);
