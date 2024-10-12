import express from "express";

// Create an instance of the router
const router = express.Router();

// GET /todos - Fetch all todos
router.get("/todos", (req, res) => {
  res.send("All Todos");
});

// GET /todos/:id - Fetch a specific todo by id
router.get("/todos/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Getting TODO with id ${id}`);
});

// POST /todos - Create a new todo
router.post("/todos", (req, res) => {
  res.json({ id: 1, title: "Todo", description: "My todo" });
});

// PUT /todos/:id - Update a specific todo by id
router.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Updating TODO with id ${id}`);
});

// DELETE /todos/:id - Delete a specific todo by id
router.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Deleting TODO with id ${id}`);
});

// Export the router as default
export default router;
