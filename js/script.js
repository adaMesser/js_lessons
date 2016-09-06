function myFunction() {
	if (document.getElementById("demo").class == "first_img") {
   		document.getElementById("demo").src = "img/02.jpg";
   		document.getElementById("demo").class = "second_img";
	} else {
		document.getElementById("demo").src = "img/01.jpg";
		document.getElementById("demo").class = "first_img";
	}
}
