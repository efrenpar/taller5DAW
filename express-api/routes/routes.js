// Load the MySQL pool connection


//Aqui añado las rutas para mi REST
const router = app => {
    app.get('/', (request, response) => {
        response.send({
            message: 'Node.js and Express REST API'
        });
    });
    //Ruta para poder tener los datos del usuario
    // Display all users
    app.get('/librosSql', (request, response) => {
        pool.query('SELECT * FROM libros', (error, result) => {
            if (error) throw error;

            response.send(result);
        });
    });

    // Búsqueda de usuarios por id, se usa ? para evitar el SQL injection
    app.get('/librosSql/:autor', (request, response) => {
        const autor = request.params.autor;

        pool.query('SELECT * FROM autor WHERE nombre = ?', autor, (error, result) => {
            if (error) throw error;

            response.send(result);
        });
    });

	app.post('/librosSql',(request,response)=>{
	pool.query('{call ingresar_libros(?,?,?,?,?)}',request.body,(error,result)=>{
			if (error) throw error;
			response.status(201).send(`libro added with ID: ${result.insertId}`);
		});
		
	});

	
    // Añadir un nuevo usuario
   /* app.post('/comida',(req, res) => {
        let data = {nombre: req.body.nombre, precio: req.body.precio, cantidad: req.body.cantidad};
        let sql = "INSERT INTO comida SET ?";
        let query = pool.query(sql, data,(err, results) => {
          if(err) throw err;
          res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
        });
      });*/

    // Actualizar usuario
    /*app.put('/librosSql/:autor',(req, res) => {
        let sql = "UPDATE libros SET autor='"+req.body.nombre+"', precio='"+req.body.precio+"' WHERE id="+req.params.id;
        let query = pool.query(sql, (err, results) => {
          if(err) throw err;
          res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
        });
      });
	*/
    //  Delete user
    app.delete('/comida/:id',(req, res) => {
        let sql = "DELETE FROM comida WHERE id="+req.params.id+"";
        let query = pool.query(sql, (err, results) => {
          if(err) throw err;
            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
        });
      });
}
//Exporta el router para ser usado en app
module.exports = router;
const pool = require('../data/config');

//Datos falsos para prueba
const users = [{
    id: 1,
    name: "Richard Hendricks",
    email: "richard@piedpiper.com",
},
{
    id: 2,
    name: "Bertram Gilfoyle",
    email: "gilfoyle@piedpiper.com",
},
];