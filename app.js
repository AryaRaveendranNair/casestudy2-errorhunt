const express = require('express'); 
const path = require ('path'); 
const app = express();  //Part#1 Point 1//
const cors = require('cors');
const bodyParser = require('body-parser'); //Part#1 Point 2//


const nav= [
    {
        link:"/books",
        title:"Books"
    },
    {
        link:"/authors",
        title:"Authors"
    },
    {
        link:"/addbook",
        title:"Add Book"
    },
    {
        link:"/addauthor",
        title:"Add Author"
    }
]

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homerouter'); //Part#1 Point3//
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');




app.set('views','./src/views'); 
app.set('view engine','ejs'); 

app.use(cors()) //Part#2 Point 7//

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index',{nav, title:'Library'}); //Part #2 Point 6//
    
});





app.listen(process.env.PORT ||5000,()=>{
    console.log("Server Ready on 5000"); //Part#1 Point 5//
});