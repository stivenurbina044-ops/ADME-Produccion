const formulario = document.getElementById("formLogin");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function (e){

    e.preventDefault();

    const id = document.getElementById("identificación").value;

    const password = document.getElementById("contraseña").value;

    const usuarios = JSON.parse(localStorage.getItem("usuarios"));

    const usuario = usuarios.find(u => 
        
        u.id === id && u.password === password

);

    if(usuario){

        mensaje.style.color = "green";
        
        mensaje.innerHTML = "Bienvenido" + usuario.nombre;

        localStorage.setItem("usuarioActivo", JSON.stringify(usuario));

        setTimeout(() => {

            window.location.href = "index.html";

        },1000);
    }

    else{

        mensaje.style.color = "red";

        mensaje.innerHTML = "Usuario o contraseña incorrectos";

    }
});
