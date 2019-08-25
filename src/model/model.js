let mongoose = require('mongoose');

mongoose.connect('mongodb+srv://efrenpar:root@libreria-ffjaw.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true, dbName: "libreria" }).then(res => console.log(res)).catch(err=>console.log(err));

let libroSchema = new mongoose.Schema({
		
		"titulo": String,
		"autores": String,
		"isbn": String,
		"calificacion_promedio": Number
	
	
})

module.exports = mongoose.model('libro',libroSchema);