
var userName = document.querySelector('input[name="userName"]');
var firstName = document.querySelector('input[name="firstName"]');
var lastName = document.querySelector('input[name="lastName"]');
var today = new Date();
var birthDate = new Date(document.querySelector('input[name="birthDate"]').value);
var ageY = today.getFullYear() - birthDate.getFullYear();
var ageM = today.getMonth() - birthDate.getMonth();
var ageD = today.getDate() - birthDate.getDate();
var userMail = document.querySelector('input[name="userMail"]');
var password = document.querySelector('input[name="password"]');
var repeatPassword = document.querySelector('input[name="repeatPassword"]');
var genderMale = document.querySelector('input[value="male"]');
var genderFemale = document.querySelector('input[value="female"]');
var submit = document.querySelector('input[name="submit"]');


document.forms["register"].addEventListener("submit", function(e) {
	
	var error;

    var inputs = this;
	// Traitement cas par cas (input unique)
	if (userMail.value=="root@paca.happy-dev.fr" || userMail.value=="admin@paca.happy-dev.fr" || userMail.value=="dieu@paca.happy-dev.fr") {
		error = "The mail " + userMail.value + " is already taken";
    }
    
    if(userName.value=="root" || userName.value=="admin" || userName.value=="dieu"){
        error= "The username " + userName.value + " is already taken";
    }

    if(password.value !== repeatPassword.value){
        error= "The passwords don't match";
    }

    if(ageY<18 || (ageY===18 && ageM<0) || (ageY===18 && ageM===0 && ageD<0)){
        error= "18+ only!";
    }

	// Traitement générique
	for (var i = 0; i < inputs.length; i++) {
		console.log(inputs[i]);
		if (!inputs[i].value) {
			error = "Veuillez renseigner tous les champs";
			break;
		}
	}

	if (error) {
		e.preventDefault();
		document.getElementById("error").innerHTML = error;
		return false;
	} else {
		alert('Formulaire envoyé !');
	}
	
});
  
