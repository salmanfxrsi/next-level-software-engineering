//* Some

const numbers = [1, 5, 3, 7, 5, 8];

const hasEvenNumber = numbers.some((num) => num % 2 === 0);
// console.log(hasEvenNumber);

const currentUserRoles = ["user", "editor", "admin"];
const featureAccessRoles = ["admin", "superuser"];
const canAccessFeature = currentUserRoles.some((role) =>
  featureAccessRoles.includes(role),
);
// console.log(canAccessFeature);

//* Array.from()
const arr = Array.from([1, 2, 3, 4, 5], (value, _) => value * value);
// console.log(arr);

const range = (start, stop, step) =>
  Array.from(
    { length: Math.ceil(stop - start) / step },
    (_, i) => start + i * step,
  );

console.log(range(0, 11, 2));
