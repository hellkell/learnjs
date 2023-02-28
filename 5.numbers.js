let a = +prompt("first", "");
let b = +prompt("second", "");
console.log(a + b)

function readNumber() {
  let a;
  do {
    a = prompt("enter", 0);
  } while(isNaN(parseFloat(a)) || !isFinite(a))
  if (a === null || a === '') return null;
  return +a;
}
console.log(readNumber())

function random(a, b) {
  return a + Math.random() * (b - a);
}

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

