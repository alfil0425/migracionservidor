
const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 
const cors = require ('cors');

const task  = require('./task.js');
const listViewRouter = require('./routes/list-view-router.js');
const listEditRouter = require('./routes/list-edit-router.js');
app.use (cors());
app.use(bodyParser.json()); 
app.get('/task', (req, res)=> {
    res.json({task});
    });
app.use('/list-view', listViewRouter); 
app.use('/list-edit', listEditRouter); 

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log('El servidor Express está escuchando en el puerto 3001...');
});






