function sumSalaries(obj) {
  let res = 0;
  for (let elem of Object.values(obj)) {
    res += elem
  }
  let res1 = Object.values(obj).reduce((a, b) => a + b);
  console.log(res)
  return res
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log( sumSalaries(salaries) ); // 650


function count(obj) {
  return Object.keys(obj).length
}

let user = {
  name: 'John',
  age: 30
};

console.log( count(user) ); // 2