
class Cadastro{

    constructor(){
        this.lista = []
    }

    validation(){
        let name = document.querySelector("#name").value
        let cpf = document.querySelector("#cpf").value
        let email = document.querySelector("#email").value
        let phone = document.querySelector("#phone").value
        let password = document.querySelector("#password").value
        

        name? document.querySelector("#nameError").innerHTML = "" : document.querySelector("#nameError").innerHTML = "*Campo Obrigatório*"
        cpf? document.querySelector("#cpfError").innerHTML = ""  : document.querySelector("#cpfError").innerHTML = "*Campo Obrigatório*" 
        email? document.querySelector("#emailError").innerHTML = ""  : document.querySelector("#emailError").innerHTML = "*Campo Obrigatório*" 
        phone? document.querySelector("#phoneError").innerHTML = "" : document.querySelector("#phoneError").innerHTML = "*Campo Obrigatório*" 
        password? document.querySelector("#passwordError").innerHTML = ""  : document.querySelector("#passwordError").innerHTML = "*Campo Obrigatório*" 
        name&&cpf&&email&&phone&&password? (alert("Cadastro realizado com sucesso!"), this.final()) : document.querySelector("#buttonError").innerHTML = "*Campo Obrigatório*"

    }

    final(){
        this.lista.push([document.querySelector("#name").value,document.querySelector("#cpf").value,document.querySelector("#email").value,
        document.querySelector("#phone").value,document.querySelector("#password").value])
        document.querySelector("#buttonError").innerHTML = "" 
        document.querySelector("#name").value = ''
        document.querySelector("#cpf").value = ''
        document.querySelector("#email").value = ''
        document.querySelector("#phone").value = ''
        document.querySelector("#password").value = ''
        
    }

}

var cadastro = new Cadastro()

