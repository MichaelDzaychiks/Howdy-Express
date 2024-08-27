const express = require('express');
const handlebars = require('express-handlebars')

const app = express();

const hbs = handlebars.create({});
hbs.handlebars.registerHelper('add',(a,b) => a + b)

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/',(req,res) => {
    res.render("index", {
        title:"home page",
        message:"howdy handlebars",
    })
});

app.get('/blog',(req,res) => {
    const blogs = [
        {title:'yoshi finds eggs', snippet : "lorem ipsum dolor sit amet consectetur"},
        {title:'momo eats cookies', snippet : "lorem ipsum dolor sit amet consectetur"},
        {title:'pika chu eats pineapple', snippet : "lorem ipsum dolor sit amet consectetur"}
    ];
    res.render('blog', {
        blogs:blogs
    })
});

app.get('/contact',(req,res) => {
    res.render('contact', {
        title:"contact us",
        message:"contact us via email or phone",
        num1:5,
        num2:10
    })
});

app.use((req,res) => {
    res.status(404).send('<h1> 404, oops not found!</h1>')
});

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port http://127.0.0.1:${PORT}`);
});