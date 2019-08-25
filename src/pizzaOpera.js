let pizzaOpera = require('./model/model')
let express = require('express');
let router = express.Router();
let _ = require('lodash')

router.post('/pizzaOpera', (req,res)=>{
	console.log(req.body)
	if(_.isEmpty(req.body)){
		return res.status(400).send('Request is missing');
	}
	
	let model = new pizzaOpera(req.body);
	model.save()
	.then(doc=>{
		if(!doc || doc.length === 0){
			return res.status(500).send(doc)
		}
		res.status(201).send(doc)
		.catch(err => {
			
			res.status(500).json(err)
		})
	})
})

module.exports = router 