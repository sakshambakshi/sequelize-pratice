const express = require("express")
    , volleyball = require("volleyball")
    , exphbs  = require('express-handlebars')
    , path = require('path')
    , db = require('./config/db')
    

const app = express()
    , port = process.env.port || 8789

app.use(volleyball)
app.use(express.json());
app.use(express.urlencoded({
    extended: true 
}))

app.engine('handlebars' , exphbs({
    defaultLayout: 'main'
}))

app.set('view engine' , 'handlebars')

//Static folder
app.use('/', express.static(path.join(__dirname , 'public')))

db.authenticate()
  .then(()=>{
      console.log('Database  Connected');
      
  })
  .catch(err =>{
        console.log("err:", err);
  })

app.get('/' , (req , res) => {
    res.render('landing')
})
app.use('/gigs' , require('./routes/gigs'))

app.listen(port , () =>{
    console.log("Listening you at http://localhost:"+port);
} )