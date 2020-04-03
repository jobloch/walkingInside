var x = 0;
var lapLength;
function setLap(){
	lapLength=parseInt(document.getElementById('laplength').value);
}
function increase(){
	x++;
}
document.onkeypress=function(event){
	if(event.keyCode==32 || event.keyCode == 61){
		x++;
	}
	if(event.keyCode==45){
		x--;
	}
	document.getElementById('laps').innerHTML=x;
	document.getElementById('mileage').innerHTML=Math.round(1000*(x*lapLength)/5280)/1000
}
