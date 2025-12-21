const btn = document.querySelectorAll('button');
const indicator = document.querySelector('.indicator');
btn.forEach((item) => item.addEventListener('click', onClick));

function onClick(){
	removeActive();
	this.className += "active";
	indicator.style.marginLeft = (this.dataset.num * 99.3) + 1 + 'px';
}
function removeActive(){
	btn.forEach((item) => item.className = '');
}