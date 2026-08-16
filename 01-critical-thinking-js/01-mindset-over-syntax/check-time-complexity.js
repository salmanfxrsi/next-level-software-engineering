const startTime = performance.now();

let sum = 0;

for (let i = 1; i <= 5000; i++) {
  sum += i;
}

const endTime = performance.now();

console.log(`Execution time: ${endTime - startTime} milliseconds`);
