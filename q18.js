const taskPromise = new Promise((resolve, reject) => {
  reject("Task Failed");
});

taskPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });