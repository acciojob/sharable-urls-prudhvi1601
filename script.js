var form = document.querySelector("form");
var h3 = document.querySelector("h3");
var nameElement = document.querySelector("#name");
var yearElement = document.querySelector("#year");
var btn = document.querySelector("#button");
 
function sharableURL(event) {
	event.preventDefault();
	var h3value = "https://localhost:8080/"
	var name = nameElement.value;
	var year = yearElement.value;
	
	if(name && year){
		h3value += "?name=" + name + "&year=" + year;
	}
	else if(name && !year){
		h3value += "?name=" + name;
	}
	else if(!name && year){
		h3value += "?year=" + year;
	}
	h3.textContent = h3value;
}
form.addEventListener("submit",sharableURL);
