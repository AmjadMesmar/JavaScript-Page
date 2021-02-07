
var Pname = prompt("Please enter your name", "Nobody");

function Wellcome(){



 if (Pname == "Nobody") {
  document.getElementById("welcome").innerHTML =
  "Hey! tell me your name!";}


 else if(Pname == "Sans"){
  alert("Are you now?");
document.getElementById("welcome").innerHTML =
  "Name: Unknown";}


else if (Pname != null) {
  document.getElementById("welcome").innerHTML =
  "Hello " + Pname + "! How are you today?";}

}


function AGE(){


	var Age = prompt("How old are you?" , "Unknown");


	if (Age == "Unknown"){
document.write("Tell me your age,Come on now!");
}

else if ((Age <10 )|| (Age > 100)){
	alert("Am I suppose to believe that!?")
document.write("Age: Wrong input.");
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

function Alerts(){

  if (Pname == "Sans"){
	alert("Enjoy your stay, whoever you are..");
}

else {

	alert("Enjoy your stay, " + Pname +"!")
} }