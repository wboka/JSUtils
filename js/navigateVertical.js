/*
 *  navigateVertical - plugin by Wayne Boka (@wboka)
 *  Documentation found at https://github.com/wboka/JSUtils/blob/master/js/navigateVertical.js
 *  Function to navigate up and down a table
 *  Version 1.2.1
 */
function navigateVertical(e) {
	var $this = $(this);
	var $parentCell = $this.closest("td");
	var types = "input, button";
	
	if ($parentCell.length > 0) {
		var $parentRow = $parentCell.closest("tr");
		
		if ($parentRow.length > 0) {
			var thisIndex = $this.index();
			var notSelect = !$this.is("select");
			
			if (notSelect && (e.which === 38 || e.which === 40)) {
				var rowCount = $parentRow.closest("tbody").find("tr").length;
				
				if (e.which == 40 && rowCount - 1 > $parentRow.index()) {
					$focusedRow = $parentRow.next("tr");
				}
				else if (e.which == 38 && $parentRow.index() > 0) {
					$focusedRow = $parentRow.prev("tr");
				}
				
				if (typeof $focusedRow !== 'undefined') {
					var $inputToFocus = $focusedRow.find('td').eq($parentCell.index()).find('input, button').eq(thisIndex);
					
					$inputToFocus.focus().select();
				}
			}
		} else {
			throw new Error(2, "navigateVertical() says, \"Navigation not called inside a tr.\"");
		}
	} else {
		throw new Error(1, "navigateVertical() says, \"Navigation not called inside a td.\"");
	}
}
