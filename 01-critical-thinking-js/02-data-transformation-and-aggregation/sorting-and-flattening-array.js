//* Sort
const numbers = [40, 100, 1, 5, 25, 10];
const fruits = ["banana", "orange", "Apple", "Mango"];

fruits.sort((a, b) => a.localeCompare(b));
// console.log(fruits);

const sortedNumber = numbers.sort((a, b) => a - b);

// console.log(numbers);
// console.log(sortedNumber);

//* Nested array flattening
const arr = [1, 2, 3, 4, 5, [6, 7, [8, 9, [10, 11]]]];

// console.log(arr.flat(Infinity));

const tagFromPosts = [
  ["JavaScript", "Programming", "CSS"],
  ["HTML", "Web Development"],
  ["CSS", "Web Design"],
  ["React", "JavaScript", "Frontend"],
  ["Node.js", "JavaScript", "Backend"],
];

const filteredTags = [...new Set(tagFromPosts.flat())];
console.log(filteredTags);
