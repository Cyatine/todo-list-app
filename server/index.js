const express = require("express"); // Use require instead of import

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Todo App!!!");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});