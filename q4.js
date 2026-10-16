function findMaximum(...numbers) {
  if (numbers.length === 0) {
    return "No numbers provided";
  }

  const maxVal = Math.max(...numbers);
  console.log(`The maximum value is: ${maxVal}`);
  return maxVal;
}

findMaximum(10, 45, 22, 89, 5, 67); 
findMaximum(3, 9, 1);