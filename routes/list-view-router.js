const express = require("express");
const router = express.Router();
const tasks = require("../data/tasks.js");

function validateParameters(req, res, next){
    const paramId = req.params.taskId;
    if (!/^\d+$/.test(paramId)){
        return res.status(400).json({error: "parametro no valido"})
    }
    next();
}
router.get("/tasks", (req, res) => {
  res.status(200).json({ tasks });
});

router.get("/completed", (req, res) => {
  const completedTask = tasks.filter(task => task.isCompleted);
  res.json(completedTask);
});

router.get("/incomplete", (req, res) => {
  const incompleteTask = tasks.filter(task => !task.isCompleted);
  res.json(incompleteTask);
});

router.get("/:taskId", validateParameters, (req, res) => {
    const taskId = req.params.taskId;
    const task = tasks.find(task => task.id == taskId);
    if (!task){
        return res.status(404).json({
            error: "tarea no encontrada"
        })
    } 
    res.json(task)
})
module.exports = router;
