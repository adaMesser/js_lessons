function myFunction() {
	if (document.getElementById("demo").src == "file:///home/lizabeth/Documents/js/img/01.jpg") {
   		document.getElementById("demo").src = "img/02.jpg";
	} else {
		document.getElementById("demo").src = "img/01.jpg";
	}
}