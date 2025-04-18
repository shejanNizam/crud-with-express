const express = require("express");
const mongoose = require("mongoose");
const todoHandler = require("./routeHandler/todoHandler");

const PORT = process.env.PORT || 5000;

// MongoDB connection with mongoose
mongoose
  .connect("mongodb://localhost/todos")
  .then(() => console.log("mongodb connected successfully!"))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());

// application routes
app.use("/todo", todoHandler);

// error handler middleware default
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
