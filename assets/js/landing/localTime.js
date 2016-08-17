
function display_c(){

	//timer font size
	var ct = document.getElementById('localTimeSpan');
	var font_Size = window.innerWidth;
	
	ct.style.fontSize = font_Size*0.026 + "pt";

	var refresh = 1000; // Refresh rate in milli seconds
	mytime = setTimeout('display_ct()',refresh)
}

function display_ct() {
	// var strcount
	var date = new Date();
			
	document.getElementById('localTimeSpan').innerHTML = ("0" + (date.getHours())).slice(-2) + ":" 
								+ ("0" + (date.getMinutes())).slice(-2) + ":" + ("0" + (date.getSeconds())).slice(-2);
	tt = display_c();
}