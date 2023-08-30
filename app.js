
const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 

const { task } = require('./task.js');
const listViewRouter = require('./routers/list-view-router');
const listEditRouter = require('./routers/list-edit-router');

app.use(bodyParser.json()); 

app.use('/list-view', listViewRouter); 
app.use('/list-edit', listEditRouter); 

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log('El servidor Express está escuchando en el puerto 3001...');
});





/*app.get('/task', (req, res)=> {
    res.json({user:'task'});
    });*/
