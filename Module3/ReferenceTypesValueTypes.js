let person1 = { name: 'Anna' }; // object - stored by reference
let person2 = person1; // person2 points to same memory location as person1
person1.name = 'Brian';
console.log(person2.name); // Brian, even though we changed person1.name
let person3 = 'Carly'; // string - stored by value
let person4 = person3; // person4 points to different memory location than person3
person3 = 'David';
console.log(person4); // still Carly, since person3 and person4 are string primitives

