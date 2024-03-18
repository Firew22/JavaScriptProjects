    for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log(`For number ${i}: Fizz`);
  }
  if (i % 5 === 0) {
    console.log(`For number ${i}: Buzz`);
  }
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`For number ${i} Fizz Buzz`);
  }
  if (i % 3 != 0 && i % 5 != 0) {
    console.log(`For number ${i} Not divisible by 3 or 5 `);
  }
}
