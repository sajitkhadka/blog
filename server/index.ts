const myServer = require("./server");

const port = process.env.PORT;

myServer.listen(port, () => {
  console.log("Listen to port: " + port);
});
