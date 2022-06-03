const divEmail = document.querySelector("#email").parentNode
const email = document.querySelector("#email")
const pErro = document.querySelector(".erro-email")
const validacao = ()=>{
    let usuario = email.value.substring(0, email.value.indexOf("@"))
    let dominio = email.value.substring(email.value.indexOf("@")+1, email.value.length)
    console.log(email.value, usuario, dominio)
    //validação de email
    if(  usuario.length >=1
         && dominio.length >=1 
         && email.value.includes("@") 
         && dominio.includes(".") ){
            pErro.classList.add("oculto")
            divEmail.style.borderColor = "initial"

    }else{
        console.log("chegou aqui")
        pErro.classList.remove("oculto")
        divEmail.style.borderColor = "red"
    }
}