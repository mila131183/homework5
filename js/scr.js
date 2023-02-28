
let ogPopUp = document.querySelector('og-popup');
let butl = document.querySelector('butl');
console.log('og-popup');
console.log('butl');
butl.addEventListener('click', ogPopUp);
function ogPopUp(evt) {
	evt.preventDefault();
	popup.classList.toggle('og-popup');
}