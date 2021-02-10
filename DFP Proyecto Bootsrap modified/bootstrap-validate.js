///// Search validation
function validation(){
    var search = document.getElementById('mySearching').value;

    if(search == ""){
        document.getElementById('search').innerHTML ="Try again with specific term";
        return false;
    }
    if((search.length <= 3) || (search.length > 20)){
        document.getElementById('search').innerHTML ="Enter at least 3 characters";
        return false;
    }
}

///// SignIn validation

const formSign = document.getElementById('myFormId');

function registerValidate() {
    console.log('HEEEREE')
	var acumErrores = 0;
	
	formSign.classList.remove('is-invalid');
	
	var inputEmail = document.forms["myForm"]["inputEmail"];
	var inputPassword = document.forms["myForm"]["inputPassword"];
	

	if(inputEmail.value == "") {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "El campo es obligatorio";
        acumErrores ++;
    }else if(!validar_email(inputEmail.value)){
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "El email no cumple el formato";
		acumErrores ++;
	}

    if(inputPassword.value == "") {
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "El campo es obligatorio";
		acumErrores ++;
	}else if(!validar_password(inputPassword.value)){
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "El password no cumple el formato";
		acumErrores ++;
	}

    if (acumErrores > 0){
        return false;
    }else{
		return true;
	}
}

///// Register validation

const formReg = document.getElementById('myFormReg');

function registerValidate1() {
    var acumErrores2 = 0;

    formReg.classList.remove('is-invalid');
	
	var inputEmailAddress1 = document.forms["myFormRegister"]["inputEmailAddress1"];
	var inputMyPassword2 = document.forms["myFormRegister"]["inputMyPassword2"];
    var inputPasswordConfirmReg = document.forms["myFormRegister"]["inputPasswordConfirmReg"];

	
    if(inputEmailAddress1.value == "") {
		inputEmailAddress1.classList.add("is-invalid");
		document.getElementById("errorEmailReg").textContent = "El campo es obligatorio";
        acumErrores2 ++;
    }else if(!validar_email(inputEmailAddress1.value)){
		inputEmailAddress1.classList.add("is-invalid");
		document.getElementById("errorEmailReg").textContent = "El email no cumple el formato";
		acumErrores2 ++;
	}
    if(inputMyPassword2.value == "") {
		inputMyPassword2.classList.add("is-invalid");
		document.getElementById("errorPasswordReg").textContent = "El campo es obligatorio";
		acumErrores2 ++;
	}else if(!validar_password(inputMyPassword2.value)){
		inputMyPassword2.classList.add("is-invalid");
		document.getElementById("errorPasswordReg").textContent = "El password no cumple el formato";
		acumErrores2 ++;
    }    
	
    if(inputMyPassword2.value != inputPasswordConfirmReg.value){
        inputPasswordConfirmReg.classList.add("is-invalid");
        document.getElementById("errorPasswordConfirmReg").textContent = "Debe contener al menos 8 caract. una mayúsc. y un núm.";
        acumErrores2 ++;
    }
    if(InputCountries.value == "") {
		InputCountries.classList.add("is-invalid");
		document.getElementById("errorCountries").textContent = "Debes agregar un pais";
		acumErrores2 ++;
	}
    if (acumErrores2 > 0){
        return false;
    }else{
		return true;
	}
}




formReg.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);
formSign.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);
///// Email Regex validation
function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}

///// Password Regex validation
function validar_password(password) {
	var regex = /(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
	return regex.test(password) ? true : false;
}