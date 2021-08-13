const express = require('express');
const { addPage, editPage, main, userList, userPages, wikiPage } = require('../views')
const { db, User, Page } = require('../models');
const wikiRouter = express.Router();



wikiRouter.get('/', (req, res) =>{
    res.send(main())
})

wikiRouter.post('/',async (req, res, next) =>{
    //Update with sql
   // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`
  console.log(req.body);

    //res.json(req.body);
  try {
    
    const page = await Page.create({
      
    //   title: req.json(req.body.title),   
    //   content: req.json(req.body.content)   
    });

    // make sure we only redirect *after* our save is complete! Don't forget to `await` the previous step. `create` returns a Promise.
    
    // res.redirect('/');
  } catch (error) { next(error) }
});

wikiRouter.get('/add', (req, res) =>{
    res.send(addPage())
})



module.exports ={
    wikiRouter
};