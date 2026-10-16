class InvalidUsernameError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidUsernameError";
  }
}

function validateUsername(username) {
  if (username.length < 5) {
    throw new InvalidUsernameError("Username must be at least 5 characters long.");
  }
  return "Username is valid.";
}

try {
  console.log(validateUsername("bob"));
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}