function bigFactorial(r) {
	for (var t = new Date, o = "1", n = 1; r >= n; n++) {
		for (var a, g, i, c, f, l, h = n.toString(), v = o.length, m = h.length, b = "0", s = -1, u = m - 1; u >= 0; u--) {
			s++, i = 0, g = a = "", l = Number(h.charAt(u));
			for (var S = v - 1; S >= 0; S--)
				if (c = l * Number(o.charAt(S)) + i, f = c % 10, i = (c - f) / 10, a = f.toString() + a, 0 === S) {
					a = (0 === i ? "" : i.toString()) + a;
					for (var A = 0; s > A; A++) g += "0";
					for (var N = a + g, T = N.length, w = b.length, D = 0; T - w > D; D++) b = "0" + b;
					for (var d, F, j = "", k = 0, p = T - 1; p >= 0; p--) d = k + Number(N.charAt(p)) + Number(b.charAt(p)), F = d % 10, k = (d - F) / 10, j = F.toString() + j, 0 === p && (j = (0 === k ? "" : k.toString()) + j);
					b = j
				}
		}
		if (o = b, n % 1e3 === 0) {
			var q = new Date;
			console.log(r + "! in " + (q.getTime() - t.getTime()) / 1e3 + " seconds")
		}
	}
	console.log(o)
}

/*HIGHLY OPTIMIZED VERSION:*/
function bigFactorialNew(r) {
	for (var e = new Date, t = e.getTime(), a = "1", o = 1; r >= o; ++o) {
		for (var n, g, c, h, i, l, b = o.toString(), f = a.length, m = b.length, u = "0", s = -1, v = m - 1; v >= 0; --v) {
			++s, c = 0, g = n = "";
			for (var A = f - 1; A >= 0; --A) l = Number(b.charAt(v)), h = l * Number(a.charAt(A)) + c, i = h % 10, c = (h - i) / 10, n = i + n;
			n = (0 === c ? "" : c.toString()) + n;
			for (var N = 1; s >= N; ++N) g += "0";
			for (var w, D, S = n + g, T = u.length, d = S.length, F = T - d, j = "", k = 0, p = d - 1; p >= 0; --p) w = k + Number(u.charAt(F + p)) + Number(S.charAt(p)), D = w % 10, k = (w - D) / 10, j = D + j;
			u = u.substring(0, F - 1) + (0 === k ? u.charAt(F - 1) : k + Number(u.charAt(F - 1))) + j
		}
		if (a = u, o % 1e3 === 0) {
			var q = new Date;
			console.log(o + "! in " + (q.getTime() - t) / 1e3 + " seconds")
		}
	}
	console.log(a)
}

/*FOLLOWING IS THE ORIGINAL, NON-MINIFIED, LEGACY CODE I MADE.
/*I HAVE KEPT IT AS IS FOR PURPOSES OF RE-UNDERSTANDING
/*THE CODE IF AND WHEN I HAVE TO

/*	THE OLD, UNOPTIMIZED, RUSTIC VERSION:

function bigFactorialTest(n) {
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
					if (k === 0) 
{						product = (carryOver === 0 ? "" : carryOver.toString()) + product;
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
			if (i % 1000 === 0) {
				var af = new Date;
				console.log(i + "! in " + (af.getTime() - before) / 1000) + " seconds";
			}
		}
		console.log(fact);


THE NEW, OPTIMIZED, REFINED VERSION (28TH Oct 2017):

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
			//Addition function starts here
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
			//Addition ends here
		}
		fact = reqSum;
		if (i % 1000 === 0) {
			var af = new Date;
			console.log(i + "! in " + ((af.getTime() - before) / 1000) + " seconds");
		}
	}
	console.log(fact);
}
}*/