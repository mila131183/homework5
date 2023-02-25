let openPopUp = document.querySelector('openpopup');
let closePopUp = document.querySelector('closepopup');
let popup = document.getElementById('popup');


openPopUp.addEventListener('click', function (evt) {
	evt.preventDefault();
	popup.classList.add('active');
})
closePopUp.addEventListener('click', () => {
	popup.classList.remove('active');
})