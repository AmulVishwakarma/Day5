function validateAge(age) {
  if (age < 18) {
    throw new Error("Age must be 18 or older.");
  }
  return "Access granted.";
}

try {
  console.log(validateAge(18));
} catch (error) {
  console.error("Error caught:", error.message);
}