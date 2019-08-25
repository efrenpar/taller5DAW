let express = require("express");
let router = express.Router();
let pizza = require('./model/model')


//queries
router.get('/pizza', (req,res)=>{
	if(req.query.nombre ){
		pizza.find({'name': { $in: `${req.params.nombre}`}}, (err, arr)=>{
			if(err)
				res.status(400).send();
			res.send(arr);	
		})
	}else{
		pizza.find((err, arr)=>{
			if(err)
				res.status(400).send(err);
			res.send(arr);	
		})
	}
});

//get pizza by params

router.get('/pizza/:nombre', (req,res)=>{
	res.send(`yuo have requested a pizza ${req.params.nombre}`);
});

router.get('/pizza/error',()=>{
	throw new Error('this is forced error'); 
	
})

module.exports = router;