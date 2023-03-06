const { Worker, isMainThread } = require("worker_threads");

if (isMainThread) {
  const worker = new Worker("./worker.js");
  console.log(worker.threadId);
  worker.on("message", (message) => console.log(message));

  worker.postMessage("this is of great importance");
} else {
  console.log("hello");
}
