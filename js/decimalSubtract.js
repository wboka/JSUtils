function decimalSubtract(number1, number2) {
    var firstNumberParts = number1.toString().split(".");
    var secondNumberParts = number2.toString().split(".");
    
	var firstDecimalPlaces = 0,
        secondDecimalPlaces = 0;

    firstDecimalPlaces = firstNumberParts.length > 1 ? firstNumberParts[1].length : 0;
    secondDecimalPlaces = secondNumberParts.length > 1 ? secondNumberParts[1].length : 0;

	var largest = Math.max(firstDecimalPlaces, secondDecimalPlaces);
    var commonFactor = Math.pow(10, largest);
	
	var firstNum1 = firstNumberParts[0];
	var firstNum2 = firstNumberParts.length > 1 ? firstNumberParts[1] : 0;
	
	while (firstNum2.length < largest) {
		firstNum2 += "0";
	}
	
	var secondNum1 = secondNumberParts[0];
	var secondNum2 = secondNumberParts.length > 1 ? secondNumberParts[1] : 0;
	
	while (secondNum2.length < largest) {
		secondNum2 += "0";
	}
	
	var parts1 = firstNum1 - secondNum1;
	var parts2 = (firstNum2 * commonFactor) - (secondNum2 * commonFactor);
	
    return parts1 + (parts2 / (commonFactor * commonFactor));
}