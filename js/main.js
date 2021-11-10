


(function (){
    $(document).ready(function(){
       $('.alt-form').click(function(){
           $('.form-content').animate({
               height:"toggle",
               opacity:'toggle'
           },600);
       });

    })
}());

  
function login(){

    let usuario = "flor";
    let clave = 123;

    let user = $("#correo").val() ;
    let contrasena = $("#pass").val();
    let error = $(".error");

    //Almacenar en el LS
    localStorage.setItem('usuario', usuario);
    localStorage.setItem('password', clave);
    
 

    if (usuario == user  && clave == contrasena){
        console.log("BIENVENIDO AL SISTEMA");
            
        Swal.fire('BIENVENIDO AL SISTEMA!!').then(function () {
            window.location = "index.html";
        }); 
        
        
    } else {
        error.html("DATOS INCORRECTOS");
      
    }


}
$("#btn1").on("click", login);






/*
function registrate(){
     

}
*/
let datosUsuario =[
    "flor",
    26,
    "floralarcon31@gmail.com",
    "img/chica2.jpg",
    "Desarrolladora"
];
