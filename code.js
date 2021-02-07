function Wellcome(){

	var Pname = prompt("Please enter your name", "Nobody");



 if (Pname == "Nobody") {
  document.getElementById("welcome").innerHTML =
  "Hey! tell me your name!";}

else if (Pname != null) {
  document.getElementById("welcome").innerHTML =
  "Hello " + Pname + "! How are you today?";}

}


function AGE(){


	var Age = prompt("How old are you?" , "Unknown");


	if (Age == "Unknown"){
document.write("Tell me your age,come on now!");
}

else if (Age != null){
	document.write("Your Age : " + Age);

}
  
}

function Occupation(){

var OC = prompt("What do you do?", "Nothing");



 if (OC == "Nothing") {
  document.write("Don't slack off!")}

else if (OC != null) {

	document.write("Occupation : " + OC);

}


}