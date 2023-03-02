let butl = document.querySelector('butl');
let ogPopUpl = document.querySelector('og-popupl');
let closePopUp = document.querySelector('close-popup');
closePopUp = evt => {
	target = evt.target;
	if (target === ogPopUpl.closest('og-popup', close)) {
		ogPopUpl.opacity = 0;
	}
}
setTimeout() {
	ogPopUpl.visibility = 'hidden';
}

