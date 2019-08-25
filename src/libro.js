let express = require("express");
let router = express.Router();
let libro = require('./model/model')


//queries
router.get('/libro', (req,res)=>{
	if(req.query.autores ){
		libro.find({'autores': { $in: `${req.params.autores}`}}, (err, arr)=>{
			if(err)
				res.status(400).send();
			res.send(arr);	
		})
	}else{
		libro.find((err, arr)=>{
			if(err)
				res.status(400).send(err);
			res.send(arr);	
		})
	}
});

//get pizza by params

router.get('/libro/:autores', (req,res)=>{
	//res.send(`yuo have requested a libro ${req.params.autores}`);
	if(!req.params.autores){
		return res.status(400).send("no se encuentra ese autor")
	}
	
	libro.find({
		autores: req.params.autores
		})
		.then (doc => {
			res.json(doc)
		})
		.catch (err => {
			res.status(500).json(err)
		})
	
});

router.get('/libro/error',()=>{
	throw new Error('this is forced error'); 
	
})

module.exports = router;