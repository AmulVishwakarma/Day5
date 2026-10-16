async function waitAndComplete() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("Task Completed");
}

waitAndComplete();