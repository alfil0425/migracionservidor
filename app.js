
const express = require('express');
const router = require("./login")
const cors = require ('cors');
const jwt = require("jsonwebtoken")
const task  = require('./task.js');
const listViewRouter = require('./routes/list-view-router.js');
const listEditRouter = require('./routes/list-edit-router.js');
const app = express();





app.use (cors());
app.use(express.json()); 
app.get('/task', (req, res)=> {
    res.json({task});
    });
app.use(express.json())




app.use('/login', router)
app.use('/list-view', listViewRouter); 
app.use('/list-edit', listEditRouter); 

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log('El servidor Express está escuchando en el puerto 3001...');
});






