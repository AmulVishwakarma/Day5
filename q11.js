class InvalidSalaryError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidSalaryError";
  }
}

function checkSalary(salary) {
  if (salary < 0) {
    throw new InvalidSalaryError("Salary cannot be less than zero.");
  }
  return "Salary is valid.";
}

try {
  console.log(checkSalary(-5000));
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}