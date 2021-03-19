function convertRoman(num) {
	var digits = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
	var romanNumber = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
	var roman='';

	for(let i=0;i<digits.length;i++) {
		while (digits[i] <= num) {
			roman +=romanNumber[i];
			num-=digits[i];
		}
	}
	return roman;
}

convertRoman(3000);
