$(document).ready(function(){
	// Mobile Menu
	$('.mobile-bars button').click(function(){
		$('.sidebar').css('left','0');
		$('.overlay-menu').show();

		return false
	});
	$('.overlay-menu').click(function(){
		$('.sidebar').css('left','-100%');
		$('.overlay-menu').hide();

		return false
	}); 

});

 
document.querySelectorAll('.accordion-toggle').forEach(toggle => {
	toggle.addEventListener('click', function (e) {
	const targetId = this.getAttribute('href');
	const target = document.querySelector(targetId);
	const icon = this.querySelector('.toggle-icon');

	// Collapse other menus
	document.querySelectorAll('.collapse').forEach(c => {
		if (c !== target) {
		const bsCollapse = bootstrap.Collapse.getInstance(c) || new bootstrap.Collapse(c, { toggle: false });
		bsCollapse.hide();
		}
	});

	// Reset all icons
	document.querySelectorAll('.toggle-icon').forEach(i => i.classList.remove('rotate'));

	// Toggle current collapse
	const bsCollapse = bootstrap.Collapse.getInstance(target) || new bootstrap.Collapse(target, { toggle: false });
	if (target.classList.contains('show')) {
		bsCollapse.hide();
		icon.classList.remove('rotate');
	} else {
		bsCollapse.show();
		icon.classList.add('rotate');
	}

	e.preventDefault(); // prevent jump
	});
});