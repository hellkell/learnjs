for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

let i = 0;
while (i < 3) {
  console.log(`number ${i}!`);
  i++
}

let k;
do {
  k = prompt("число больше 100", 0)
} while(k < 100)

label:
for (let i = 2; i < 10; i++) {
  for (let j = 2; j < Math.floor(i); j++) {
    if (i % j == 0) {
      continue label;
    }
  }
  console.log(i)
}