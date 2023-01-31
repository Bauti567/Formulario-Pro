const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const validarForm = (e)=>{
    switch (e.target.name){
        
        case "usuario":
            if (expresiones.usuario.test(e.target.value)) {
                document.getElementById('grupo__usuario').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__usuario').classList.add('formulario__grupo-correcto');
                document.querySelectorAll('#grupo_usuario i').classList.remove()



 
            } else{
                document.getElementById('grupo__usuario').classList.add('formulario__grupo-incorrecto');
            }
        break;

        case "nombre":
            
        break;

        case "contraseña":
            
        break;

        case "contraseña2":
            
        break;

        case "correo":
            
        break;

        case "telefono":
            
        break;
    }

    /*console.log(e.target.name);*/ // Cada vez que se ejecute la funcion se va a mostrar el nombre de la etiqueta

}

inputs.forEach((input)=>{ // La Funcion for Each permite añadir funciones a cada uno de los elementos
    input.addEventListener('keyup', validarForm); // El argumento keyup, se ejecuta cada vez que se deje de tecle;
    input.addEventListener('blur', validarForm);


});

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();

});