let date = new Date(2012, 1, 20, 3, 12);
console.log(date)

let date1 = new Date(2012, 0, 3);  // 3 января 2012 года
console.log( getWeekDay(date1) );        // нужно вывести "ВТ"

function getWeekDay(date) {
	let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']
	return days[date.getDay()]
}


function getLocalDay(date) {
  let day = date.getDay();
  if (day == 0) {
    day = 7;
  }
  return day;
}

console.log(getLocalDay(new Date(2012, 0, 3)));


function getDateAgo(date, days) {
	let _date = new Date(date)
	_date.setDate(_date.getDate() - days);
  	return _date;
}

let date2 = new Date(2015, 0, 2);
console.log(getDateAgo(date2, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date2, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date2, 365)); // 2, (2 Jan 2014)

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}
console.log(getLastDayOfMonth(2012, 0)); // 31
console.log(getLastDayOfMonth(2012, 1)); // 29
console.log(getLastDayOfMonth(2013, 1)); // 28

function getSecondsToday() {
  let now = new Date()
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  let res = now - today
  return Math.round(res / 1000)
}

console.log(getSecondsToday());

function getSecondsToTomorrow() {
  let now = new Date()
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
  let res = tomorrow - now
  return Math.round(res / 1000)
}

console.log(getSecondsToTomorrow());

function formatDate(date) {
	let now = new Date()
	if (now - date < 1000) {
		console.log('now')
	}
	else if (now - date < 60000) {
		console.log('lower than 1 minute', now - date, 'seconds ago')
	}
	else if (now - date < 3600000) {
		console.log('lower than 1 hour', Math.floor((now - date) / 60), 'minutes ago')
	}
	else {
		let year = date.getFullYear().toString().slice(-2);
		let month = date.getMonth() + 1;
		let day = date.getDate();
		let hour = date.getHours();
		let minutes = date.getMinutes();
		month = month < 10 ? '0' + month : month;
		day = day < 10 ? '0' + day : day;
		hour = hour < 10 ? '0' + hour : hour;
		minutes = minutes < 10 ? '0' + minutes : minutes;
		console.log('it was', day+'.'+month+'.'+year+', '+hour+':'+minutes)
	}
}

formatDate(new Date(new Date - 1))
formatDate(new Date(new Date - 30 * 1000))
formatDate(new Date(new Date - 5 * 60 * 1000))
formatDate(new Date(new Date - 86400 * 1000))