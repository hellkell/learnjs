let user = {
  name: "Василий Иванович",
  age: 35
};
let json = JSON.stringify(user)
let parsed = JSON.parse(json)
console.log(parsed)



let room = {
  number: 23
};

let meetup = {
  title: "meeting",
  occupiedBy: [{name: "ivanov"}, {name: "petrov"}],
  place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;
console.log(meetup)

console.log( JSON.stringify(meetup, function replacer(key, value) {
	console.log(key)
	if (key == '') console.log('error', value)
	return (key != "" && value == meetup) ? undefined : value;
}));