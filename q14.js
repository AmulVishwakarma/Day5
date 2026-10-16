function validateAge(age) {
  if (age < 18) {
    throw new Error("Age must be at least 18.");
  }
  return "Access granted.";
}

function registerUser(age) {
  try {
    const message = validateAge(age);
    console.log(message);
  } catch (error) {
    console.error("Registration failed:", error.message);
  }
}

registerUser(16);