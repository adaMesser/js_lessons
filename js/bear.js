function myFunction() {
	if (document.getElementById("demo").class == "first_bear") {
   		document.getElementById("demo").src = "img/bear/bear02.jpg";
   		document.getElementById("demo").class = "second_bear";
	} else if (document.getElementById("demo").class == "second_bear") {
   		document.getElementById("demo").src = "img/bear/bear03.jpg";
   		document.getElementById("demo").class = "third_bear";
	} else {
   		document.getElementById("demo").src = "img/bear/bear01.jpg";
   		document.getElementById("demo").class = "first_bear";
	}
}
