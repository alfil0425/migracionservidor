const express = require('express');
const router = express.Router();
const task = require('../task.js');

router.get('/completed', (req, res) => {
    const completedTask = task.filter((task) => task.isCompleted === true);
    res.json(completedTask);
});

router.get("/incompleted", (req, res) => {
const incompleteTask = task.filter((task) => task.isCompleted === false);
res.json(incompleteTask);
});

module.exports = router;