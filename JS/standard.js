timerID = setInterval('clock()',500); //0.5秒毎にclock()を実行

function clock() {
	document.getElementById("view_clock").innerHTML = getNow();
}

function getNow() {
	var now = new Date();
	var year = now.getFullYear();
	var mon = (now.getMonth()+1).toString().padStart(2, '0'); 
	var day = now.getDate().toString().padStart(2, '0');
	var hour = now.getHours().toString().padStart(2, '0');
	var min = now.getMinutes().toString().padStart(2, '0');
	var sec = now.getSeconds().toString().padStart(2, '0');

	//出力用
	var s = year + "/" + mon + "/" + day + " " + hour + ":" + min + ":" + sec; 
	return s;
}

function copy() {
	var text = document.getElementById("Mail-area");
	text.select();
	document.execCommand('copy');
}