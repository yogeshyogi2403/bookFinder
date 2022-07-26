const express = require('express');
const{engine} =require('express-handlebars');

const app = express();

app.engine('handlebars',engine({
    defaultLayout: 'main'
}));

app.set('view engine','handlebars');

app.use(express.static('public'));
const port =process.env.PORT|| 3000;

app.get('/',(req,res) =>{
    res.render('home.handlebars');
});



app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});