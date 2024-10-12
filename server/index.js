import express from "express";
import router from "./routes/todos.js"; // Import the router

const app = express();
const port = 3000;

// Use the router with /api prefix
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Hello Todo App!!!");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
