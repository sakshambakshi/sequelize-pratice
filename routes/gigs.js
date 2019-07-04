const router = require('express').Router();
const db = require('../config/db');
const Gig = require('../models/Gig');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


router.get('/' ,(req , res) =>{
    /*
    * Get all data from db
    */
    Gig.findAll()
       .then(gigs =>{
           console.log({gigs})
        //    res.send({gigs})
            res.render('gigs' ,{
                gigs
            })
       })
       .catch(err =>{
           console.log("err: "+err)
       })
})


router.get('/add' ,(req , res) =>{
    res.render('add')
})

router.post('/add' , (req , res ) =>{
    const data ={
        title : 'Looking for a Node Developer ',
        technologies: 'node , javascript , html , css ',
        budget:'INR 3000',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        contact_email: 'saksham1@gmail.com'
    }
    let {title , technologies , budget , description , contact_email } = req.body

    // Insert into Table

    Gig.create({
        title , technologies , budget , description , contact_email 
    })
    .then(resp =>{
        res.redirect('/gigs')
    })
    .catch(err =>{
        console.log(err)
    })
})


router.get('/search' , (req , res ) =>{
    let {term}   =  req.query 
    term = term.toLowerCase()
    Gig.findAll({ where : {technologies: {[Op.like]: '%'+ term +'%'}}})
        .then(gigs => res.render('gigs' ,{
            gigs
        }))
        .catch(err => console.log(err))
})

module.exports = router
