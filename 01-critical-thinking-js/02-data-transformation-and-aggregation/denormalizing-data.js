const users = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Smith",
  },
  {
    id: 3,
    name: "Alex Johnson",
  },
  {
    id: 4,
    name: "Sarah Wilson",
  },
  {
    id: 5,
    name: "Michael Brown",
  },
];

const posts = [
  {
    id: 101,
    userId: 1,
    title: "Getting Started with JavaScript",
  },
  {
    id: 102,
    userId: 2,
    title: "Understanding React Components",
  },
  {
    id: 103,
    userId: 1,
    title: "JavaScript Array Methods",
  },
  {
    id: 104,
    userId: 3,
    title: "A Guide to TypeScript",
  },
  {
    id: 105,
    userId: 4,
    title: "Building REST APIs with Node.js",
  },
  {
    id: 106,
    userId: 2,
    title: "Introduction to Next.js",
  },
  {
    id: 107,
    userId: 5,
    title: "Understanding Data Structures",
  },
  {
    id: 108,
    userId: 3,
    title: "Clean Code Principles",
  },
  {
    id: 109,
    userId: 1,
    title: "Async JavaScript Explained",
  },
  {
    id: 110,
    userId: 5,
    title: "Database Design Basics",
  },
];

// TODO: create a hash table

const postByUserId = posts.reduce((table, post) => {
  const { userId } = post;

  if (!table[userId]) table[userId] = [];

  table[userId].push(post);

  return table;
}, {});

const userWithPosts = users.map((user) => {
  return {
    ...user,
    posts: postByUserId[user.id] || [],
  };
});

console.log(JSON.stringify(userWithPosts));
