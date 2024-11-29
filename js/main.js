document.querySelectorAll('.foto__contenedor .foto__overlay').forEach((el) => {
    
	el.addEventListener('click', function (ev) {
        
		ev.stopPropagation();
		this.parentNode.classList.add('active');
	});
});

document.querySelectorAll('.foto__contenedor').forEach((el) => {
	el.addEventListener('click', function (ev) {
		this.classList.remove('active');
	});
});
