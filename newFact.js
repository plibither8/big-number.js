function bigAddition(a, b) {
	var lenA = a.length;
	var lenB = b.length;
	var diff = lenA - lenB;
	var reqNum = "";
	var tempSum, reqDig;
	var carryOver = 0;
	for (let i = lenB - 1; i >= 0; --i) {
		tempSum = carryOver + Number(a.charAt(diff + i)) + Number(b.charAt(i));
		reqDig = tempSum % 10;
		carryOver = (tempSum - reqDig) / 10;
		reqNum = reqDig + reqNum;
	}
	reqNum = a.substring(0, diff - 1) + (carryOver === 0 ? a.charAt(diff - 1) : carryOver + Number(a.charAt(diff - 1))) + reqNum;
	return reqNum;
}

function bigMultiplication(a, b) {
	var lenA = a.length;
	var lenB = b.length;
	var reqSum = "0";
	var zeroTicker = -1;
	var product, zeroes, carryOver, tempProd, reqDigit, digB;
	for (let i = lenB - 1; i >= 0; --i) {
		++zeroTicker;
		carryOver = 0;
		zeroes = product = "";
		for (let j = lenA - 1; j >= 0; --j) {
			digB = Number(b.charAt(i));
			tempProd = digB * Number(a.charAt(j)) + carryOver;
			reqDigit = tempProd % 10;
			carryOver = (tempProd - reqDigit) / 10;
			product = reqDigit + product;
		}
		product = (carryOver === 0 ? "" : carryOver.toString()) + product;
		for (let k = 1; k <= zeroTicker; ++k) {
			zeroes += "0";
		}
		reqSum = bigAddition(reqSum, product + zeroes)
	}
	return reqSum;
}

function bigAddAndMult(a, b) {
	var lenA = a.length;
	var lenB = b.length;
	var reqSum = "0";
	var zeroTicker = -1;
	var product, zeroes, carryOverM, tempProd, reqDigit, digB;
	for (let i = lenB - 1; i >= 0; --i) {
		++zeroTicker;
		carryOverM = 0;
		zeroes = product = "";
		for (let j = lenA - 1; j >= 0; --j) {
			digB = Number(b.charAt(i));
			tempProd = digB * Number(a.charAt(j)) + carryOverM;
			reqDigit = tempProd % 10;
			carryOverM = (tempProd - reqDigit) / 10;
			product = reqDigit + product;
		}
		product = (carryOverM === 0 ? "" : carryOverM.toString()) + product;
		for (let k = 1; k <= zeroTicker; ++k) {
			zeroes += "0";
		}
		summand = product + zeroes;
		console.log(summand);
		var lenC = reqSum.length;
		var lenD = summand.length;
		var diff = lenC - lenD;
		var reqNum = "";
		var tempSum, reqDig;
		var carryOver = 0;
		for (let i = lenD - 1; i >= 0; --i) {
			tempSum = carryOver + Number(reqSum.charAt(diff + i)) + Number(summand.charAt(i));
			reqDig = tempSum % 10;
			carryOver = (tempSum - reqDig) / 10;
			reqNum = reqDig + reqNum;
		}
		reqSum = reqSum.substring(0, diff - 1) + (carryOver === 0 ? reqSum.charAt(diff - 1) : carryOver + Number(reqSum.charAt(diff - 1))) + reqNum;
	}
	console.log(reqSum);
	return reqSum;
}

function bigFactorialOld(n) {
	var be = new Date;
	var before = be.getTime();
	var fact = "1";
	for (var i = 1; i <= n; i++) {
		var b = i.toString();
		var lenA = fact.length;
		var lenB = b.length;
		var reqSum = "0";
		var zeroTicker = -1;
		var product, zeroes, carryOver, tempProd, reqDigit, digB;
		for (var j = lenB - 1; j >= 0; j--) {
			zeroTicker++;
			carryOver = 0;
			zeroes = product = "";
			digB = Number(b.charAt(j));
			for (var k = lenA - 1; k >= 0; k--) {
				tempProd = digB * Number(fact.charAt(k)) + carryOver;
				reqDigit = tempProd % 10;
				carryOver = (tempProd - reqDigit) / 10;
				product = reqDigit.toString() + product;
				product = (carryOver === 0 ? "" : carryOver.toString()) + product;
				if (k === 0) {
					for (var l = 0; l < zeroTicker; l++) {
						zeroes += "0";
					}
					var c = product + zeroes;
					var lenC = c.length;
					var lenD = reqSum.length;
					for (var m = 0; m < lenC - lenD; m++) {
						reqSum = "0" + reqSum;
					}
					var reqNum = "";
					var tempSum, reqDig;
					var carryOverA = 0;
					for (var o = lenC - 1; o >= 0; o--) {
						tempSum = carryOverA + Number(c.charAt(o)) + Number(reqSum.charAt(o));
						reqDig = tempSum % 10;
						carryOverA = (tempSum - reqDig) / 10;
						reqNum = reqDig.toString() + reqNum;
						if (o === 0) {
							reqNum = (carryOverA === 0 ? "" : carryOverA.toString()) + reqNum;
						}
					}
					reqSum = reqNum;
				}
			}
		}
		fact = reqSum;
	}
	var af = new Date;
	var after = af.getTime();
	console.log(fact);
	console.log(n + "! in " + (after - before) / 1000 + " seconds")
}

function bigFactorialNew(n) {
	var be = new Date;
	var before = be.getTime();
	var fact = "1";
	for (var i = 1; i <= n; ++i) {
		var b = i.toString();
		var lenA = fact.length;
		var lenB = b.length;
		var reqSum = "0";
		var zeroTicker = -1;
		var product, zeroes, carryOverM, tempProd, reqDigit, digB;
		for (var j = lenB - 1; j >= 0; --j) {
			++zeroTicker;
			carryOverM = 0;
			zeroes = product = "";
			for (var k = lenA - 1; k >= 0; --k) {
				digB = Number(b.charAt(j));
				tempProd = digB * Number(fact.charAt(k)) + carryOverM;
				reqDigit = tempProd % 10;
				carryOverM = (tempProd - reqDigit) / 10;
				product = reqDigit + product;
			}
			product = (carryOverM === 0 ? "" : carryOverM.toString()) + product;
			for (var l = 1; l <= zeroTicker; ++l) {
				zeroes += "0";
			}
			var summand = product + zeroes;
			var lenC = reqSum.length;
			var lenD = summand.length;
			var diff = lenC - lenD;
			var reqNum = "";
			var tempSum, reqDig;
			var carryOver = 0;
			for (var m = lenD - 1; m >= 0; --m) {
				tempSum = carryOver + Number(reqSum.charAt(diff + m)) + Number(summand.charAt(m));
				reqDig = tempSum % 10;
				carryOver = (tempSum - reqDig) / 10;
				reqNum = reqDig + reqNum;
			}
			reqSum = reqSum.substring(0, diff - 1) + (carryOver === 0 ? reqSum.charAt(diff - 1) : carryOver + Number(reqSum.charAt(diff - 1))) + reqNum;
		}
		fact = reqSum;
		if (i % 1000 === 0) {
			var af = new Date;
			console.log(i + "! in " + ((af.getTime() - before) / 1000) + " seconds");
		}
	}
	console.log(fact);
}
