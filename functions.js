function checkAge1(age) {
  return age > 18 ? true : confirm('Родители разрешили?')
}

function checkAge2(age) {
  return age > 18 || confirm('Родители разрешили?')
}

function min(a, b) {
  return a < b ? a : b
}

function pow(a, b) {
  let result = 1;
  while (b > 0) {
    result *= a
    b -=1
  }
  return result
}

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);