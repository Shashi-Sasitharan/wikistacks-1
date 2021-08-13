const express = require('express');
const morgan = require('morgan');
const app = express();
const { addPage, editPage, main, userList, userPages, wikiPage } = require('./views')
const path = require('path')
const { db, User, Page } = require('./models');
const {wikiRouter} = require('./routes/wiki');
const {userRouter} = require('./routes/users');


morgan('dev')

app.use('/wiki', wikiRouter);



db.authenticate()
  .then(() => {
    console.log('IT WORKS');
  })

app.use('/', express.static(path.join(__dirname, 'public')))
app.get('/', (req, res)=>{
    // res.send(main());
    res.redirect('/wiki');
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

