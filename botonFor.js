


function mostrarLog() {
    var elementoContra=document.getElementById("password");

if (elementoContra.type==="password") {
    elementoContra.type="text";
}else{
    elementoContra.type="password";
}

}
function mostrarReg() {
    var elementoPass=document.getElementById("pass");
    var elementoPass2=document.getElementById("pass2");
if (elementoPass.type==="password"&&elementoPass2.type==="password") {
    elementoPass.type="text";
    elementoPass2.type="text";
}else{
    elementoPass.type="password";
    elementoPass2.type="password";
}

}

function validarGmail() {
    var exRegular= /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;
    var elementoGmail=document.getElementById("gmail");
    var elementoPass=document.getElementById("pass");
    var elementoPass2=document.getElementById("pass2");
    
    if (exRegular.test(elementoGmail.value)) {
        alert('El email es valido');
        
    }else {
        alert("El email no es valido");
        return false;
    }
    if(elementoPass.value==elementoPass2.value){
        alert("Las contraseñas son iguales");
        
    }else {
        alert("Las contraseñas deben ser iguales");
        return false;
    }
    
}


function validarPass() {
    var elementoPass=document.getElementById("pass");
    var elementoPass2=document.getElementById("pass2");

if(elementoPass.value!=elementoPass2.value){
    alert("Las contraseñas deben ser iguales");
    return false;
}else {
    alert("Las contraseñas son iguales");
    return true;
}
}








