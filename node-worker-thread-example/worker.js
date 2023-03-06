const { parentPort } = require("worker_threads");

parentPort.on("message", (message) =>
  parentPort.postMessage({ ping: message })
);
