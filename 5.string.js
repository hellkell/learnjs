function ucFrist(str) {
	return (str[0].toUpperCase() + str.slice(1))
}

function checkSpam(str) {
	str = str.toLowerCase();
	return str.includes('viagra') || str.includes('xxx');
}

function truncate(str, maxlength) {
	let bonus = '';
	if (str.length < maxlength) {
		for (let i = 0; i < maxlength - str.length; i++) {
			bonus += '…';
		}
	}
	return str + bonus
}

function extractCurrencyValue(val) {
	return +val.slice(1)
}