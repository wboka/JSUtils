// Function to navigate up and down a table
function navigateVertical(e) {
	var $this = $(this);
	var $parentCell = $this.closest("td");
	var $parentRow = $parentCell.closest("tr");
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
}
