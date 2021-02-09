function fimages ()
{

	var question = prompt("Sans or Papyrus ?");

	while(question !== "Sans" && question !== "Papyrus"){

		question = prompt("Sans or Papyrus ?");
	}

	var answer = '';

	if (question == "Sans") 
	{

		answer = '<img src="../Images/sans.gif"/>'

		//document.write(answer);
	}

	else if (question == "Papyrus") 
	{

		answer = '<img src="../Images/Papyrus.gif"/>'
		// document.write(answer);

	}

	var inum = prompt("Write a number:")
	var result ='';

	for (var i =0; i<inum; i++){

		result = result+ answer;
	}

	document.write(result);


}