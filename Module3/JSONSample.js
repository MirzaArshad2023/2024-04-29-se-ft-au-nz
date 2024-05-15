const student = {
    name: 'Sita',
    age: 28,
    courses: ['HTML', 'CSS', 'JS'],
    occupation: null
}
console.log(JSON.stringify(student))

const book = {
    title: "Gone With The Wind",
    printTitle() { // ignored
        console.log(this.title)
    },
    releaseDate: undefined // ignored
}
console.log(JSON.stringify(book)) // {"title":"Gone With The Wind"}

const room = {
    number: 23
}
const meetup = {
    title: "Strategy Conference",
    participants: ['Chris', 'Tina'],
}
meetup.place = room; // meetup references room
room.occupiedBy = meetup; // room references meetup

console.log(meetup)
console.log(room)

console.log( JSON.stringify(meetup, ['title', 'participants']) );

console.log( JSON.stringify(meetup, function(key, value) {
    if (key != '' && value == meetup) return undefined // skip references to current object
    else if (typeof value == 'function') return value.toString() // stringify functions
    return value // otherwise return original value unchanged
    }, 2) ); // use 2 spaces for nicer formatting