let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles[Math.floor((styles.length - 1) / 2)] = 'Классика';
console.log(styles.shift());
styles.unshift('Рэп', 'Регги');

function sumInput() {
	let arr = [];
	let stop = false
	do {
	    let a = prompt("enter: ", 0);
	    if (a === "" || a === null || !isFinite(a)) {
	    	stop = true;
	    }
	    else {
		    arr.push(+a);
	    }
  	} while (stop == false)
  	return arr.reduce((partialSum, a) => partialSum + a, 0);
}

function getMaxSubSum(arr) {
  let maxS = 0;
  for (let i = 0; i < arr.length; i++) {
    let current = 0;
    for (let j = i; j < arr.length; j++) {
      current += arr[j];
      maxS = Math.max(maxS, current);
    }
  }

  return maxSum;
}

function camelize(str) {
  return str.split('-').map((element, i) => i == 0 ? element : element[0].toUpperCase() + element.slice(1)).join('')
}

function filterRange(arr, a, b) {
	// let res = []
	// arr.forEach(element => {if (element >= a && element <= b) res.push(element)})
	// return res
	return arr.filter(element => (element >= a && element <= b))
}

function filterRangeInPlace(arr, a, b) {
	for (let i = 0; i < arr.length; i++) {
    let k = arr[i];
    if (k < a || k > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

function copySorted(arr) {
	return arr.slice().sort();
}



function Calculator() {
	this.methods = {
		'+': (a,b) => a + b,
		'-': (a,b) => a - b
	}
	this.calculate = function(str) {
		let ex = str.split(' ')
		if (this.methods[ex[1]] && !isNaN(parseInt(ex[0])) && isFinite(ex[0]) && !isNaN(parseInt(ex[2])) && isFinite(ex[2])) {
			return this.methods[ex[1]](ex[0], ex[2])
		}
	}
}

let vasya = {name: "Вася", age: 25};
let petya = {name: "Петя", age: 30};
let masha = {name: "Маша", age: 28};
let users = [vasya, petya, masha ];
let names = users.map(element => element.name);
console.log(names)


let vasya1 = {name: "vasya", surname: "pupkin", id: 1};
let petya1 = {name: "petya", surname: "ivaniv", id: 2};
let masha1 = {name: "masha", surname: "petrova", id: 3};
let users1 = [vasya1, petya1, masha1];
let usersMapped = users1.map(element => ({
	fullName: element.name + ' ' + element.surname, id: element.id
}))
console.log(usersMapped[0])

function sortByAge(arr) {
	arr.sort((a, b) => a.age - b.age)
}
let vasya2 = {name: "vasya", age: 25};
let petya2 = {name: "petya", age: 30};
let masha2 = {name: "misha", age: 28};
let arr = [vasya2, petya2, masha2];
sortByAge(arr);
console.log(arr[0].name); // Вася
console.log(arr[1].name); // Маша
console.log(arr[2].name); // Петя

function shuffle(arr) {
	let help = [];
	let res = [];
	let k = arr.length;
	let l = arr.length;
	let rand;
	for (let i = 0; i < arr.length; i++) {
		help.push(i)
	}
	for (let i = 0; i < l; i++) {
		rand = Math.floor(Math.random() * k);
		
		res.push(arr[help[rand]]);
		console.log(rand, arr[help[rand]], help, res)
		help.splice(rand, 1);
		k--;
	}
	return res;
}

let arr1 = [1, 2, 3];
console.log(shuffle(arr1));

function getAverageAge(arr) {
  return arr.reduce((accumulator, user) => accumulator + user.age, 0) / arr.length;
}

let vasya3 = {name: "Вася", age: 25};
let petya3 = {name: "Петя", age: 30};
let masha3 = {name: "Маша", age: 28};

let arr2 = [vasya3, petya3, masha3];

console.log(getAverageAge(arr2));

function unique(arr) {
  return arr.filter((value, index, self) => self.indexOf(value) === index);
}

let strings = ["abc", "abc", "dfe", "dfe",
  "dfe", "dfe", "abc", "abc", ":-O"
];

console.log(unique(strings));


function groupById(array) {
	let initialValue = {};
  return array.reduce((obj, value, index, array) => {
    console.log('1', obj, value, index, array)
    obj[value.id] = value;
    console.log('2', obj, value, index, array)
    return obj;
  }, initialValue)
  console.log('initialValue', initialValue)
}

let users2 = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users2);
console.log('usersbyID', usersById)