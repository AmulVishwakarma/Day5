function checkAge(age) {
  if (typeof age !== "number" || isNaN(age)) {
    throw new Error("Invalid input: Age must be a number.");
  }
  if (age < 0 || age > 120) {
    throw new Error("Invalid age range. Please enter a realistic age.");
  }
  if (age < 18) {
    throw new Error("Validation failed: You must be at least 18 years old.");
  }
  return "Age is valid. Access granted!";
}

function registerUser(age) {
  try {
    const result = checkAge(age);
    console.log("Success:", result);
  } catch (error) {
    console.error("Error caught during validation:", error.message);
  }
}

registerUser(16); 
registerUser(21); 
registerUser(-5); 