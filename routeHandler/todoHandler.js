const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const todoSchema = require("../schemas/todoSchema");

const Todo = new mongoose.model("Todo", todoSchema);

//  GET ALL THE TODOS
router.get("/", async (req, res) => {
  console.log("hello ");
});

//  GET A TODOS BY ID
router.get("/:id", async (req, res) => {});

//  POST A TODO
router.post("/", async (req, res) => {
  try {
    const newTodo = new Todo(req.body);
    const savedTodo = await newTodo.save();
    res.status(200).json({
      message: "Todo was inserted successfully!",
      todo: savedTodo,
    });
  } catch (error) {
    res.status(500).json({
      error: "There was an  server side error!",
      details: error.message,
    });
  }
});

//  POST MULTIPLE TODOS
router.post("/all", async (req, res) => {
  if (!Array.isArray(req.body)) {
    return res.status(400).json({
      error: "Request body should be an array of todos",
    });
  }

  const savedAllTodo = await Todo.insertMany(req.body);
  try {
    res.status(200).json({
      message: "Todo was inserted successfully!",
      todo: savedAllTodo,
    });
  } catch (error) {
    res.status(500).json({
      error: "There was an  server side error!",
      details: error.message,
    });
  }
});

//  PUT TODO
router.put("/:id", async (req, res) => {});

//  DELETE TODOS
router.delete("/:id", async (req, res) => {});

module.exports = router;
