let user = {
  name: "John",
  years: 30
};

let {name, years: age, isAdmin = false} = user;
console.log( name ); // John
console.log( age ); // 30
console.log( isAdmin ); // false

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {
  let min = 0, key, value, name
  for (let element of Object.entries(salaries)) {
    [key, value] = element
    if (value > min) {
      min = value
      name = key
    }
    console.log(key, value, name)
  }

}

topSalary(salaries)