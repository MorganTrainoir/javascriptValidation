
var userName = document.querySelector('input[name="userName"]');
var firstName = document.querySelector('input[name="firstName"]');
var lastName = document.querySelector('input[name="lastName"]');
var birthDate = document.querySelector('input[name="birthDate"]');
var userMail = document.querySelector('input[name="userMail"]');
var password = document.querySelector('input[name="password"]');
var repeatPassword = document.querySelector('input[name="repeatPassword"]');
var genderMale = document.querySelector('input[value="male"]');
var genderFemale = document.querySelector('input[value="female"]');
var submit = document.querySelector('input[name="submit"]');




document.forms["register"].addEventListener("submit", function(e) {
	
	var error;

	var inputs = this;

	//Calcul Age
	var bD = birthDate.value;
	var td = new Date();
	var year = bD.substr(0,4); 
	var month = bD.substr(5,2)-1; //-1 car le navigateur commence les jours et mois a 0
	var day = bD.substr(8,2)-1;
	var age = td.getFullYear()-year;	
	var ageMonth = td.getMonth()-month; 
	var ageDay = td.getDay()-day;

	if((ageMonth < 0) || ((ageMonth == 0) && (ageDay < 0))){
		age--;
	}	
		
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

	if(age<18){
		error="18+ only";
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
  
