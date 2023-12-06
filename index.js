const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('./assets'));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


app.get('/',function(req, res){
   return res.render('home',{
        title:"Node || Prectice",
        name:"Shivam Kushwah"
    });
});
app.get('/sign',function(req, res){
    return res.render('sign',{
         title:"Node || Prectice",
         name:"Shivam Kushwah"
     });
 });



app.listen(port, function(err){
    if(err){
        console.log("error on running port");
    }else{
        console.log("server is running on port : ",port);
    }
})