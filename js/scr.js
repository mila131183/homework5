let butl = document.querySelector('.butl');
let ogPopUpl = document.querySelector('.og-popupl');
let closePopUp = document.querySelector('.close-popup');

butl.addEventListener('click', showPopUp);
function showPopUp(evt) {
	evt.preventDefault();
	ogPopUpl.classList.toggle('show-popup');
};

