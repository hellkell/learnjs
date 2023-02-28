let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

function isEmpty(obj) {
  return Object.keys(obj).length == 0 ? true : false
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = Object.values(salaries).reduce((partialSum, a) => partialSum + a, 0);

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}

let calculator = {
  read() {
  	this.a = +prompt('first number: ', 0)
  	this.a = +prompt('second number: ', 0)
  }
  sum() {
  	return this.a + this.b
  }
  mul() {
  	return this.a * this.b
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );