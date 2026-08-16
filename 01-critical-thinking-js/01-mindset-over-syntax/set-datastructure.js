const arr = ["apple", "banana", "mango", "apple"];

// brute force
const removeDuplicateArray = (arr) => {
  const newArray = [];
  arr.forEach((element) => {
    if (!newArray.includes(element)) {
      newArray.push(element);
    }
  });
  return newArray;
};


// set data structure
const set = new Set(arr);

set.add("google");
set.add("amazon");
set.add("meta");
set.add("microsoft");

const test = Array.from(set);

test.push("tomato");

console.log(set.has("tomato"));
console.log(set.delete("apple"));

console.log(set);
