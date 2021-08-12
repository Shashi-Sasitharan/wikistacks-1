const express = require('express');
const morgan = require('morgan');
const app = express();
const { addPage, editPage, main, userList, userPages, wikiPage } = require('./views')
const path = require('path')

morgan('dev')

app.use('/', express.static(path.join(__dirname, 'public')))
app.get('/', (req, res)=>{
    res.send(main());
})





app.listen('1337',()=>{
    console.log('listening on port 1337')
})