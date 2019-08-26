// Load the MySQL pool connection


const router = app => {
    app.get('/', (request, response) => {
        response.send({
            message: 'Node.js and Express REST API'
        });
    });
	
	//Ruta para mostrar los libros
    // Display all users
app.get('/librosSql', (request, response) => {
        pool.query('SELECT * FROM libros', (error, result) => {
            if (error) throw error;

            response.send(result);
        });
    });
	
// Búsqueda de autores por nombre, se usa ? para evitar el SQL injection
    app.get('/librosSql/:autor', (request, response) => {
        const autor = request.params.autor;

        pool.query('SELECT * FROM autor WHERE nombre = ?', autor, (error, result) => {
            if (error) throw error;

            response.send(result);
        });
    });
	
	
app.post('/librosSql',(request,response)=>{
	pool.query('call ingresar_libros(?,?,?,?,?)',request.body,(error,result)=>{
		if (error) throw error;
		response.status(201).send(`libro added with ID: ${result.insertId}`);
	});
	
});

module.exports = router;
const pool = require('../data/config');