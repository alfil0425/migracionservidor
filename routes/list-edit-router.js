const express = require ('express');
const router = express.Router();
const {task} = require('./task.js');

router.post('/', (req, res)=> {
    const newTask = req.body;
    task.push(newTask);
    res.json({ message : 'Tarea Creada'});
});

router.delete('/:taskId', (req, res)=>{
    const taskId = parseInt (req.params.taskId);
    const index = task.findIndex((task) => task.id === taskId);
    
    if (index !== -1) {
        task.splice (index, 1);
        res.json({message: 'Tarea Eliminada'});
    } else {
        res.status(404).json({message: 'Tarea no encontrada'});
    }
});

router.put('/:taskId',(req, res) => {
    const taskId= parseInt (req.params.taskId);
    const updatedTask = req.body;
    const index = task.findIndex ((task) => task.Id===taskId );

    if (index !== -1) {
        task[index] = updatedTask;
        res.json({message: 'Tarea Actualizada'});
    } else { res.status (404).json({message: 'Tarea no encontrada'});
}
});

module.exports = router;