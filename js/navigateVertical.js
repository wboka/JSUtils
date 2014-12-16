/*
 *  navigateVertical - plugin by Wayne Boka (@wboka)
 *  Documentation found at https://github.com/wboka/JSUtils/blob/master/js/navigateVertical.js
 *  Function to navigate up and down a table
 *  Version 1.1.0
 */
function navigateVertical(e) {
	var $this = $(this);
	var $parentCell = $this.closest("td");
	
	if ($parentCell.length > 0) {
		var $parentRow = $parentCell.closest("tr");
		
		if ($parentRow.length > 0) {
			var thisIndex = $this.index();
			var notSelect = !$this.is("select");
			
			if (notSelect && (e.which === 38 || e.which === 40)) {
				if (e.which == 40 && rowCount - 1 > $parentRow.index()) {
					$focusedRow = $parentRow.next("tr");
				}
				else if (e.which == 38 && $parentRow.index() > 0) {
					$focusedRow = $parentRow.prev("tr");
				}
				
				if (typeof $focusedRow !== 'undefined') {
					$focusedRow
					.children()
					.filter(":nth-child(" + ($parentCell.index() + 1) + ")")
					.children()
					.filter(":nth-child(" + (thisIndex + 1) + ")")
					.focus()
					.select();
				}
				
			}
		} else {
			throw new Error(2, "Navigation not called in a tr.");
		}
	} else {
		throw new Error(1, "Navigation not called in a td.");
	}
}
