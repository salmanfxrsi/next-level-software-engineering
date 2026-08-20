const posts = [
  {
    id: 1,
    author: "John Doe",
    title: "Getting Started with JavaScript",
  },
  {
    id: 2,
    author: "Jane Smith",
    title: "Understanding React Components",
  },
  {
    id: 3,
    author: "Alex Johnson",
    title: "A Guide to TypeScript",
  },
  {
    id: 4,
    author: "Sarah Wilson",
    title: "Building REST APIs with Node.js",
  },
  {
    id: 5,
    author: "Michael Brown",
    title: "Introduction to Data Structures",
  },
];

const lookupTable = posts.reduce((table, post) => {
  table[post.id] = post;
  return table;
}, {});

// console.log(lookupTable);

const findPost = posts.find((post) => post.id === 2);
// console.log(findPost);

console.log(lookupTable["1"]);

for (let post in lookupTable) console.log(lookupTable[post]);
