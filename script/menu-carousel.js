$(document).ready(function() {
	var rotate, timeline, count;

	rotate = function() {
		return $('.card:first-child').fadeOut(400, 'swing', function() {
			return $('.card:first-child').appendTo('.card-container').hide();
		}).fadeIn(400, 'swing');
	};

	timeline = setInterval(rotate, 3500);
	
	function abortTimer(){
		clearInterval(timeline);
	}

	var count = 0;
	function AddActiveClass() {
		var menuitem = $('ol li');
		var menuLength = menuitem.length - 1;
		// Check if the actual item isn't more than the length then add 1
		// otherway restart to 0
		count < menuLength ? count++ : count = 0;
		// Remove the class and add it to the new target
		menuitem.removeClass('active').eq(count).addClass('active');
	}

	setInterval(AddActiveClass, 3570);
	
	$('li').on('mouseenter', function(){
		abortTimer();
	});
	
	$('li').on('mouseleave', function(){
		timeline = setInterval(rotate, 3500);
	});

}).call(this);