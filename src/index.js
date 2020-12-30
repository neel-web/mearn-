const express = require('express');
const { partials } = require('handlebars');
const port = 3333;
const app = express();
const hbs = require('hbs');
const { public_path  , partialPath} = require('./srcpath');
app.set('view engine','hbs');
app.use(express.static(public_path));
hbs.registerPartials(partialPath);

app.get('/',(req,res)=>{
    res.render('index');
});


app.listen(port,()=>{
    console.log(`server runnig in localhost:${port}`);
});
