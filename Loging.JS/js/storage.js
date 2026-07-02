if (!localStorage.getItem("usuario")) {
    
    const usuario = [

        {
            id:"12345",
            nombre:"Administrador",
            cargo:"Administrador",
            password:"12345",
        }

    ];

    localStorage.setItem("usuarios", JSON.stringify(usuario));

}

if (localStorage.getItem("usuarios")==null) {

    localStorage.setItem("usuarios", JSON.stringify([]));

}