const rects = document.querySelectorAll('.rect');

rects.forEach(rect => {
	rect.addEventListener('click', () => {
		rect.className = 'rect spin';
		setTimeout(() => {rect.className = 'rect check'}, 2000);
	});
});
