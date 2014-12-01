/*
 *  jsDecimalMath - plugin by Wayne Boka (@wboka)
 *  Documentation found at https://github.com/wboka/JSUtils/blob/master/js/jsDecimalMath.js
 *  Version 1.1.0
 */
function jsDecimalMath(left, right, operand) {
    // Get the numbers from the left and right of the decimal for each number passed in
    var leftNumberParts = left.toString().split(".");
    var rightNumberParts = right.toString().split(".");
    
	// Find if they have any decimals
    var leftDecimalPlaces = leftNumberParts.length > 1 ? leftNumberParts[1].length : 0;
    var rightDecimalPlaces = rightNumberParts.length > 1 ? rightNumberParts[1].length : 0;

	// Set the largest common factor
	var largest = Math.max(leftDecimalPlaces, rightDecimalPlaces);
    var commonFactor = Math.pow(10, largest);
	
	// Multiply both numbers by the commonFactor
	function makeInt(n) {
		return n * commonFactor;
	}
	
	function makeFloat(n) {
		if (operand == "*") {
			return n / Math.pow(commonFactor, 2);
		} else if (operand == "/") {
			return n;
		} else {
			return n / commonFactor;
		}
	}
	
	var retValue = null;
	
	// Do math based on the operand passed in
	switch (operand) {
		case "+":
			retValue = makeFloat(makeInt(left) + makeInt(right));
			break;
		case "-":
			retValue = makeFloat(makeInt(left) - makeInt(right));
			break;
		case "*":
			retValue = makeFloat(makeInt(left) * makeInt(right));
			break;
		case "/":
			retValue = makeFloat(makeInt(left) / makeInt(right));
			break;
		default:
			retValue = "Error";
	}
	
	// Return the correct value
	return retValue;
}
