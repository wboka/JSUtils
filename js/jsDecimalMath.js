function jsDecimalMath(left, right, operand) {
	var leftNumberParts = left.toString().split(".");
    var rightNumberParts = right.toString().split(".");
    
    var leftDecimalPlaces = leftNumberParts.length > 1 ? leftNumberParts[1].length : 0;
    var rightDecimalPlaces = rightNumberParts.length > 1 ? rightNumberParts[1].length : 0;

	var largest = Math.max(leftDecimalPlaces, rightDecimalPlaces);
    var commonFactor = Math.pow(10, largest);
	
	function makeInt(n) {
		return n * commonFactor;
	}
	
	function makeFloat(n) {
		return n / commonFactor;
	}
	
	var retValue = null;
	
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
	
	return retValue;
}
