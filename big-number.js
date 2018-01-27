/**ADDITION FUNCTION**/

function add(a, b) {

	//Check whether arguments are string
	if (typeof a === "string" && typeof b = "string") {

		let lengthA = a.length;
		let lengthB = b.length;
		
		if (lengthB > lengthA) add(b, a); //first argument necessarily has to be greater than or equal to second argument

		let difference = lengthA - lengthB;
		
		let requiredNumber = "";
		let temporarySum, requiredDigit;
		let carryOver = 0;
		
		for (let i = lengthB - 1; i >= 0; --i) {
		
			temporarySum = carryOver + Number(a.charAt(difference + i)) + Number(b.charAt(i));
			requiredDigit = temporarySum % 10;
			carryOver = (temporarySum - requiredDigit) / 10;
			requiredNumber = requiredDigit + requiredNumber;
		
		}
		
		requiredNumber = a.substring(0, difference - 1) + (carryOver === 0 ? a.charAt(difference - 1) : carryOver + Number(a.charAt(difference - 1))) + requiredNumber;
		
		return requiredNumber;

	}
	
}


/**MULTIPLICATION FUNCTION**/

function multiply(a, b) {
	
	//Check whether arguments are string
	if (typeof a === "string" && typeof b === "string") {

		let lengthA = a.length;
		let lengthB = b.length;

		let requiredNumber = "0";
		let zeroTicker = -1;
		let product, zeroes, carryOver, temporaryProduct, digitAtB;

		for (let i = lengthB - 1; i >= 0; --i) {

			++zeroTicker;
			carryOver = 0;
			zeroes = product = "";

			for (let j = lengthA - 1; j >= 0; --j) {

				digitAtB = Number(b.charAt(i));
				
				temporaryProduct = digitAtB * Number(a.charAt(j)) + carryOver;
				carryOver = Math.floor(temporaryProduct / 10);
				product = (temporaryProduct % 10) + product;

			}

			product = (carryOver === 0 ? "" : carryOver.toString()) + product;

			for (let k = 1; k <= zeroTicker; ++k) {

				zeroes += "0";

			}

			requiredNumber = add(requiredNumber, product + zeroes);

		}

		return requiredNumber;
	
	}

}