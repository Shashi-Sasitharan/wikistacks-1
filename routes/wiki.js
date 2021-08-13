const express = require('express');
const { addPage, editPage, main, userList, userPages, wikiPage } = require('../views')
const { db, User, Page } = require('../models');
const wikiRouter = express.Router();

wikiRouter.use(express.json()) // for parsing application/json
wikiRouter.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded-<<<<<<<<<



wikiRouter.get('/', (req, res) =>{
    res.send(main())
})

wikiRouter.post('/' ,async (req, res, next) =>{
    //Update with sql
   // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`
  //console.log(req.body);

    //res.json(req.body);
  try {
    
    const page = await Page.create({
        title: req.body.title,   
        content: req.body.content,
        slug: generateSlug(req.body.title)   
    });
    
    // make sure we only redirect *after* our save is complete! Don't forget to `await` the previous step. `create` returns a Promise.
    
     res.redirect('/');
  } catch (error) { next(error) }
});

wikiRouter.get('/add', (req, res) =>{
    res.send(addPage())
})


function generateSlug (title) {
    // Removes all non-alphanumeric characters from title
    // And make whitespace underscore
    return title.replace(/\s+/g, '_').replace(/\W/g, '')+".com";
  }


module.exports ={
    wikiRouter
};