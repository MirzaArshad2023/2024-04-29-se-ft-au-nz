// objects in javascript contain keys (or properties) with corresponding values
const user = {
    "first_name": "Sammy",
    "last_name": "Shark",
    "age": 25,
    "followers": 987,
    "Institute_Name": "IOD"
}
// we can access properties with dot notation
console.log(user.first_name); // Sammy
console.log(user.age); // 25
// or with array style square bracket syntax
console.log(user["last_name"]); // Shark

console.log(user);
user.Institute_Name = "UOA"
user.followers = 988; // we can also assign new values to object properties
user.location = 'Pacific Ocean'; // or create new properties
user.Citizenship = 'New Zealand'
user["Passport"] = "Australia"

console.log(user)