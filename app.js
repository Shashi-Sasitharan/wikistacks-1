const express = require('express');
const morgan = require('morgan');
const app = express();
const { addPage, editPage, main, userList, userPages, wikiPage } = require('./views')
const path = require('path')
const { db, User, Page } = require('./models');

morgan('dev')

db.authenticate()
  .then(() => {
    console.log('IT WORKS');
  })

app.use('/', express.static(path.join(__dirname, 'public')))
app.get('/', (req, res)=>{
    res.send(main());
})



async function runDB(){
    // await Page.sync();
    // await User.sync();
    await db.sync({force: true});

    app.listen('1337',()=>{
        console.log('listening on port 1337')
    });
}

runDB();

