const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
// Creamos un arreglo de los inputs


//Las expresiones permiten validar los datos ingresados
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
const campos = {
	usuario: false,
	nombre: false,
	password: false,
	correo: false,
	telefono: false
}


// Iniciando la validacion del Formulardio

const validarFormulario = (e) =>{ // Comprueba los campos, y cuando se de un click 
	switch(e.target.name){
		case  "usuario": // Cuando el nombre de la etiqueta sea 
				validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
		case  "nombre": // Cuando el nombre de la etiqueta sea 
				validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case  "contraseña": // Cuando el nombre de la etiqueta sea 
				validarCampo(expresiones.password, e.target, 'contraseña');
		break;
		case  "contraseña2": // Cuando el nombre de la etiqueta sea 
				validarPass2();
		break;
		case  "correo": // Cuando el nombre de la etiqueta sea 
				validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case  "telefono": // Cuando el nombre de la etiqueta sea 
				validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}


	// target.name permite identificar cual campo se está validando
}

const validarCampo = (expresion, input, campo)=>{
	if (expresion.test(input.value)) {
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');				
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-xmark');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-badge-check');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__error-activo');
		campos[campo] = true
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-xmark');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-badge-check');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo')
		campos[campo]= false
	}
};

const validarPass2 = ()=>{
	const inputPassword1 = document.getElementById('contraseña');
	const inputPassword2 = document.getElementById('contraseña2');

	if (inputPassword1.value != inputPassword2.value) {
		document.getElementById(`grupo__contraseña2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__contraseña2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__contraseña2 i`).classList.add('fa-circle-xmark');
		document.querySelector(`#grupo__contraseña2 i`).classList.remove('fa-badge-check');
		document.querySelector(`#grupo__contraseña2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['contraseña'] = false
	} else{
		document.getElementById(`grupo__contraseña2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__contraseña2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__contraseña2 i`).classList.remove('fa-circle-xmark');
		document.querySelector(`#grupo__contraseña2 i`).classList.add('fa-badge-check');
		document.querySelector(`#grupo__contraseña2 .formulario__input-error`).classList.remove('formulario__input-error-activo')
		campos['contraseña'] = false
	}
}


inputs.forEach((input)=>{ // La funcion ForEach permite por cada unno 
    input.addEventListener('keyup', validarFormulario) // La funcion keyup se ejecuta cuando se deja de escribir
	// Al levantar la tecla se ejecuta la funcion validar Formulario
	input.addEventListener('blur', validarFormulario)

});

formulario.addEventListener('submit', (e)=>{ // Evita que se envíe el formulario
	e.preventDefault();

	const terminos = document.getElementById('terminos');

	if(campos.usuario && campos.nombre && campos.password && campos.telefono && campos.correo && terminos.checked){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(()=>{
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');

		}, 5000);
		
	}

});
