function checkZero(num1, num2) {
  if (num2 === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return num1 / num2;
}

try {
  console.log(checkZero(10, 0));
} catch (error) {
  console.error("Error caught:", error.message);
}