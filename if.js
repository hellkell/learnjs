let k = prompt('enter: ', 0);
if (k == 0){
	console.log(0)
}
else if (k > 0) {
	console.log(1)
}
else if (k < 0) {
	console.log(-1)
}

let result = a + b < 4 ? 'Мало' : 'Много';
let message = login == 'Сотрудник' ? 'Привет': login == 'Директор' ? 'Здравствуйте' : login == '' ? 'Нет логина' : '';
