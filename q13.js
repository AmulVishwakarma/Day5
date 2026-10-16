function first() {
  throw new Error("An error occurred in first()");
}

function second() {
  first();
}

function third() {
  try {
    second();
  } catch (error) {
    console.error("Caught in third():", error.message);
  }
}

third();