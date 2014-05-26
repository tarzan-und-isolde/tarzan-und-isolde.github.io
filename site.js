$(document).ready(function() {

	$('#menu a').click(function(ev) {
		var elem = $(this);
		$('.content').hide();
		$(elem.attr('href')).show();
		ev.preventDefault();
	});

	$('.content').hide();
	$('.content:first').addClass('selected').show();

});
