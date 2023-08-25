const express = require ("express");
const app = express ()

const {task} = require ("./task.js")

console.log(task);





app.get('/task', (req, res)=> {
    res.json({user:'task'});
    });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("servidor express esta escuchando en el puerto 3000...");
});
