let login = prompt('login :');
if (login == 'admin') {
	console.log('11')
	let password = prompt('pswrd :');
	if (password == 'admin') {
		console.log('hello')
	}
	else if (password == null || password == '') {
		console.log('cancel')
	}
	else {
		console.log('wrong password')
	}
}
else if (login == '' || login === null) {
  console.log( 'Cancel' );
else {
	console.log('i don\'t know you')
}
//поменял на английский