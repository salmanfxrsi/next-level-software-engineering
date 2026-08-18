const target1 = { name: "google" };
const target2 = { name: "facebook" };

const obj = {};

obj[target1] = { targetId: "level1" };
obj[target2] = { targetId: "level2" };

console.log(obj);

const map = new Map();

map.set(target1, { targetId: "level1" });
map.set(target2, { targetId: "level2" });

console.log(map.size);
console.log(map.has(target1));

map.forEach((value, key) => {
  key.name = "I need to crack " + key.name;
});

for (let key of map.keys()) {
  key.name = "I need to crack " + key.name;
}

console.log(map.keys());
console.log(map.values());
