function add(num1, num2 = 10) {
  const sum = num1 + num2;
  console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
  return sum;
}

add(5, 20); 
add(5);    