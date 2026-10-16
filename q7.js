amul = 1
try {
  console.log(amul);
} catch (error) {
  console.log("An error occurred: " + error.message);
} finally {
  console.log("Execution completed.");
}