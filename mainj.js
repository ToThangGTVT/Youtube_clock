
//bộ đếm giờ
var second = localStorage.getItem('second') || 0;
var minute = localStorage.getItem('minute') || 0;
var hour = localStorage.getItem('hour') || 0;
var current_day = localStorage.getItem('current_day') || 0;
var d = new Date();

//kiểm tra xem đã sang ngày mới chưa
if (current_day===0){
	current_day = d.getDate();
	localStorage.setItem('current_day', current_day);
}

if (current_day!=d.getDate()){
	second = 0;
	minute = 0;
	hour = 0;
	current_day = d.getDate();
	localStorage.setItem('current_day', current_day);
}

var s = second;
var m = minute;
var h = hour;

var s_s;
var s_m;
var s_h;

//chạy bộ đếm thời gian

function time(){
	if (current_day!=d.getDate()){
		second = 0;
		minute = 0;
		hour = 0;
		s = 0;
		m = 0;
		h = 0;
		current_day = d.getDate();
		localStorage.setItem('current_day', current_day);
	}
    s++;
	if (s>59) {
		s=0;
		m++;
		if (m>59) {
			s=0;
			m=0;
			h++;
		}
	}
	
	if (s<10){
    	s_s = '0'+s.toString();
	}
	else{
		s_s = s;
	}
	if (m<10){
    	s_m = '0'+m.toString();
	}
	else{
		s_m = m;
	}
	if (h<10){
    	s_h = '0'+h.toString();
	}
	else{
		s_h = h;
	}	
	if (s===0){
		s_s='00';
	}
    document.getElementById('time121212').innerHTML =s_h+':'+s_m+':'+s_s;
    
    second = s;
    minute = m;
    hour = h;
    localStorage.setItem('second', second);
    localStorage.setItem('minute', minute);
    localStorage.setItem('hour', hour);
}


//tạo button
$(document.getElementById('logo')).ready(function(){
	var myVar = setInterval(time, 1000);
	var btn = document.createElement("BUTTON"); 
	
	btn.className='okok22423'
	btn.id = 'time121212'
	var myVar2 = setInterval(timeload, 500);
	function timeload(){
		if (document.getElementById('logo')!==null){
			document.getElementById('logo').appendChild(btn);
			var st = clearTimeout(myVar2);
		}
	}
});
