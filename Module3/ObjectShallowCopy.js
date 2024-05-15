const user = { name: 'Elliot', age: 27 };
const userClone = {}; // empty object, refers to different memory location
for (let key in user) { // iterate over user properties
userClone[key] = user[key]; // re-create them in userClone
}
console.log(userClone); // { name: 'Elliot', age: 27 }
userClone.age = 30;

console.log(user)
console.log(userClone)