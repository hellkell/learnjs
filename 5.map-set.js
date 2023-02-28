function unique(arr) {
    const set = new Set(arr);
    return Array.from(set);
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // Hare,Krishna,:-O

function aclean(arr) {
  let res = new Map();
  arr.forEach(element => res.set(element.toLowerCase().split("").sort().join(""), element))
  console.log('test1', arr1, res)
  return Array.from(res.values())
}
let arr1 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr1));

let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
console.log(typeof(keys))
keys.push("more");