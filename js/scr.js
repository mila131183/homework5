let butl = document.querySelector(".butl");
let ogPopUp = document.querySelector(".ogPopUp");

butl.addEventListener("click", open);
//ogPopUp.addEventListener("click", close);

function open(evt) {
	evt.preventDefault();
	butl.classList.add("active");

	//function close() {
	ogpopup.classList.toggle("open");
};