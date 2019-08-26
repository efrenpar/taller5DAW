const vueApp = new Vue({
  el: '#vapp',
  data() {
	  return {
		  input:{
		  username: "",
		  password: ""
	  }
	 }
  },
  methods:{
	  login() {
    if(this.input.username != "" && this.input.password != "") {
        if(this.input.username == "manuella" && this.input.password == "1234") {
            window.location.href = './index.html'
        } else {
            console.log("The username and / or password is incorrect");
        }
    } else {
        console.log("A username and password must be present");
    }
}
  }
})