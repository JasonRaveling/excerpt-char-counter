jQuery(document).ready(function() {

	var $ = jQuery;
	var totalChars = 92; // Total chars allowed in textarea
	var countTextBox = $('#excerpt') // Excerpt textarea

	// write a div to this doc
	countTextBox.before('<div id="excerpt-char-count-wrapper"><span name="excerpt-char-count" id="excerpt-char-count"></span> characters remaining</div>');

	var charsCountEl = $('#excerpt-char-count'); // Remaining chars count will be displayed here
	charsCountEl.text(totalChars); // initial value of countchars element

	// hide the "excerpts are optional" paragraph
	$('#postexcerpt p').css('display', 'none');

	countTextBox.keyup(function() {
		var thisChars = this.value.replace(/{.*}/g, '').length; // get chars count in textarea

		if (thisChars > totalChars - 12) {
			$("#excerpt-char-count-wrapper").css('color', 'red');
		} else {
			$("#excerpt-char-count-wrapper").css('color', 'black');
		}

		if (thisChars > totalChars) { // if we have more chars than it should be
			var CharsToDel = (thisChars - totalChars); // total extra chars to delete
			this.value = this.value.substring(0, this.value.length - CharsToDel); // remove excess chars from textarea
		} else {
			charsCountEl.text(totalChars - thisChars); // count remaining chars
		}
	});
});
