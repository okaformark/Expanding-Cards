// get elements
const panels = document.querySelectorAll('.panel');

//functions
const removeActiveClass = () => {
	panels.forEach((panel) => {
		panel.classList.remove('active');
	});
};

// loop through elements
panels.forEach((panel) => {
	panel.addEventListener('click', () => {
		removeActiveClass();
		panel.classList.add('active');
	});
});
