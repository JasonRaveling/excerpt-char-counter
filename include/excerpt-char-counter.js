$(document).ready(function() {
	var totalChars = 92; // Total chars allowed in textarea
	var countTextBox = $('#excerpt') // Excerpt textarea

	// write a div to this doc
	countTextBox.before('<div class="excerpt-char-count-wrapper"><span name="excerpt-char-count" id="excerpt-char-count"></span> characters left</div>');

	var charsCountEl = $('#excerpt-char-count'); // Remaining chars count will be displayed here

	charsCountEl.text(totalChars); // initial value of countchars element
	countTextBox.keyup(function() {
		var thisChars = this.value.replace(/{.*}/g, '').length; //get chars count in textarea
		if (thisChars > totalChars) // if we have more chars than it should be
		{
			var CharsToDel = (thisChars - totalChars); // total extra chars to delete
			this.value = this.value.substring(0, this.value.length - CharsToDel); // remove excess chars from textarea
		} else {
			charsCountEl.text(totalChars - thisChars); // count remaining chars
		}
	});
});
