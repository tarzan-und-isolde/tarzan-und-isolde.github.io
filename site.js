$(document).ready(function() {

	$('#menu a').click(function(ev) {
		var elem = $(this);
		$('.content').hide();
		$(elem.attr('href')).show();
		$('#menu a').removeClass('selected');
		elem.addClass('selected');
		ev.preventDefault();
	});

	$('.content').hide();
	$('.content:first').show();
	$('#menu a:first').addClass('selected');

});
