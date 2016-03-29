jQuery(document).ready(function() {

	var $ = jQuery;
	var initialCount;
	var maxChars = 92; // Total chars allowed in textarea
	var countTextBox = $('#excerpt') // Excerpt textarea

	// write a div to this doc
	countTextBox.before('<div id="excerpt-char-count-wrapper"><span name="excerpt-char-count" id="excerpt-char-count"></span> characters remaining</div>');

	var charsCountEl = $('#excerpt-char-count'); // Remaining chars count will be displayed here
	charsCountEl.text('-'); // get chars count in textarea); // initial value of countchars element

	// hide the "excerpts are optional" paragraph
	$('#postexcerpt p').css('display', 'none');

	countTextBox.bind('input paste', function() {
		var thisChars = this.value.replace(/{.*}/g, '').length; // get chars count in textarea

		if (thisChars > maxChars - 12) {
			$("#excerpt-char-count-wrapper").css('color', 'red');
		} else {
			$("#excerpt-char-count-wrapper").css('color', 'black');
		}

		if (thisChars > maxChars) {
			var CharsToDel = (thisChars - maxChars); // total extra chars to delete
			this.value = this.value.substring(0, this.value.length - CharsToDel); // remove excess chars from textarea
			charsCountEl.text('0');
		} else {
			charsCountEl.text(maxChars - thisChars); // count remaining chars
		}
	});
});
