const express = require('express');
const app = express();

let pizzaOperaRoute = require('./src/pizzaOpera')

let libroRoute = require('./src/libro');

let path = require('path');

let bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use((req ,res ,next)=>{
	console.log(`${new Date().toString()}=>${req.originalUrl}`);
	next();
});
app.use(libroRoute);
app.use(pizzaOperaRoute); 
app.use(express.static('public'));


app.use((req, res, next) => {
	
	res.status(404).send('page not found');
}) 

app.use((err, req, res, next)=> {
	console.error(err.stack);
	
	res.sendFile(path.join(__dirname, '/public/500.html'));
})

/*app.get('/',(req,res)=>{

    res.send('Hello World');
});

app.get('/api/courses',(req,res)=>{

    res.send([1,2,3]);
});

app.get('/api/posts/:year/:month',(req,res)=>{
res.send(req.params);

});*/
//PORT
const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log(`listening on port ${port}...`));