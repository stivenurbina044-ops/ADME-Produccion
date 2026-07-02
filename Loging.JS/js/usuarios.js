const form = document.getElementById("formulario");

const tabla = document.getElementById("tablaUsuarios");

const mensaje = document.getElementById("mensaje");

let usuarios =  JSON.parse(localStorage.getItem("usuarios"));


mostrarUsuarios();

form.addEventListener("submit", guardarUsuario); 

function guardarUsuario(e) {

    e.preventDefault();

    const id = document.getElementById("identificación").value.trim();

    const nombre = document.getElementById("nombre").value.trim();

    const cargo = document.getElementById("cargo").value.trim();

    const password = document.getElementById("password").value;

    const confirmar = document.getElementById("confirmar").value;

    if(password !== confirmar){

        mensaje.style.color = "red";

        mensaje.innerHTML = "Las contraseñas no coinciden";

        return;

    }

    const existe = usuarios.find(u => u.id === id);

    if (existe) {

        mensaje.style.color = "red";

        mensaje.innerHTML = "Ya existe un usuario con esa identificación";

        return;

    }

    const usuario = {
        id,
        nombre,
        cargo,
        password
    };

    usuarios.push(usuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    mensaje.style.color = "green";
    mensaje.innerHTML = "Usuario guardado correctamente";

    form.reset();
    mostrarUsuarios();

}

function mostrarUsuarios() {

    usuarios = JSON.parse(localStorage.getItem("usuarios"));
    tabla.innerHTML = "";

    usuarios.forEach(usuario => {

        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${usuario.id}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.cargo}</td>
            <td><button class="btn btn-danger" onclick="eliminarUsuario('${usuario.id}')">Eliminar</button></td>
        `;

        tabla.appendChild(fila);

    });

}

