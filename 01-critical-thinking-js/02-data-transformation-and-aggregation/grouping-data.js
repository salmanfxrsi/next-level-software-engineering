const bloodGroups = [
  "A+",
  "O+",
  "B+",
  "O-",
  "A+",
  "AB+",
  "B-",
  "O+",
  "A-",
  "B+",
  "O+",
  "AB-",
  "A+",
  "O-",
  "B+",
  "O+",
  "A-",
  "B-",
  "O+",
  "AB+",
  "A+",
  "O+",
  "B+",
  "O-",
  "A+",
  "B-",
  "AB+",
  "O+",
  "A-",
  "O+",
];

const count = bloodGroups.reduce((table, bloodGroup) => {
  if (table[bloodGroup]) table[bloodGroup] = table[bloodGroup] + 1;
  else table[bloodGroup] = 1;

  return table;
}, {});

console.log(count);
