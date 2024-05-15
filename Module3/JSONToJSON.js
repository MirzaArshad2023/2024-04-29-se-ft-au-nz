const room = {
    number: 23, toJSON() { return this.number }
}
const meetup = {
    title: "Strategy Conference", 
    participants: ['Chris', 'Tina'],
   
}

meetup.place = room; // meetup references room
room.occupiedBy = meetup; // room references meetup

console.log(JSON.stringify(meetup)); // no more circular references as room stringifies to 23
// {"title":"Strategy Conference","participants":["Chris","Tina"],"place":23}