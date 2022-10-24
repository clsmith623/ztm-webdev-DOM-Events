var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + " "));
	li.setAttribute("class", "item")
	var button = document.createElement("button");
	button.innerHTML = "Del";
	li.appendChild(button);
	button.setAttribute("class","del");
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function li_click(event) {
	if (event.target.tagName === "BUTTON") {
		event.target.closest('li').remove();
	}

	if (event.target.classList.contains("done")) {
		event.target.classList.remove("done")
	} else {
		event.target.classList.add("done");
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", li_click);