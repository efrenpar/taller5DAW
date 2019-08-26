


const vueApp = new Vue({
  el: '#vapp',
  data() { 
   return {
	   libros: [],
	   search: ''
	   
   } 
  },
  mounted(){
	  axios
		.get('http://localhost:3000/libro')
		.then(response => (this.libros = response.data))
  },
  computed: {
	   librosPorAutor(){
		  return this.libros.filter(libro => {
			  return libro.autores.toLowerCase().indexOf(this.search.toLowerCase()) > -1
		  })
	  }
	  
  }
})

///Douglas%20Adams