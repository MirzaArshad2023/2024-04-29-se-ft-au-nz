const meetup = {
    title: "Strategy Conference", participants: ['Chris', 'Tina'], date: '2023-06-01'
}
const meetupString = JSON.stringify(meetup) // convert object to string
console.log(meetupString)

const meetupObject = JSON.parse('{"Name":"Mirza", "Institute":"IOD", "joinedDate":"2022-11-15"}', (key, value)=>{
    if(!isNaN(Date.parse(value))) return new Date(value)
    return value;
})
console.log(meetupObject)