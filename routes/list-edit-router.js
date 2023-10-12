const express = require("express");
const router = express.Router();
const tasks = require("../data/tasks");

function validateData(req, res, next){
  const {id, name, description, isCompleted} = req.body;
  if (req.method === "POST" || req.method === "PUT") {
    if (!id || !name || !description || typeof isCompleted !== "boolean") {
      return res.status(400).json({ error: "datos de tarea invalidos" });
    }
  } 
  next();
};

router.post("/create", validateData, (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  res.status(201).json(newTask);
});

router.delete("/delete/:taskId", (req, res) => {
  const taskId = req.params.taskId;
  const index = tasks.findIndex(task => task.id !== taskId);
  tasks.splice(index, 1);
  res.json({mensaje: `Tarea con Id ${taskId} eliminada`});
});

router.put("/update/:taskId",validateData, (req, res) => {
  const taskId = req.params.taskId;
  const updatedTask = req.body;
  const index = tasks.findIndex(task => (task.id == taskId));
  tasks[index]=updatedTask;
  res.json(updatedTask);
});

module.exports = router;
