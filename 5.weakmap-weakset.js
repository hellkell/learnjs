let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];
let weakset = new WeakSet();
weakset.add(messages[0]);
console.log(weakset.has(messages[0]))
console.log(weakset.has(messages[1]))

let weakmap = new WeakMap();
weakmap.set(messages[0], new Date())