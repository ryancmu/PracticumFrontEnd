
function display_clock(){

	//timer font size
	var ct = document.getElementById('localTimeSpan');
	var font_Size = window.innerWidth;

	ct.style.fontSize = font_Size*0.020 + "pt";

	var refresh = 1000; // Refresh rate in milli seconds
	mytime = setTimeout('display_change_time()',refresh);
}

function display_change_time() {
	// var strcount
	var date = new Date();
	var ct = document.getElementById('localTimeSpan');

	ct.innerHTML = ("0" + (date.getHours())).slice(-2) + ":"
								+ ("0" + (date.getMinutes())).slice(-2) + ":" + ("0" + (date.getSeconds())).slice(-2);
	tt = display_clock();
}
