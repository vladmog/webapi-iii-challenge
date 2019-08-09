const server = require("./server.js");

const port = process.env.PORT || 4002;
const greeting = "Hi, Jamie!"; 
server.listen(port, () => {
  console.log(
    `\n*** ${greeting} Server Running on http://localhost:${port} ***\n`
  );
});