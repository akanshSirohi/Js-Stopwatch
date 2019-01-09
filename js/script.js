setInterval(go,10.5);
setInterval(blk,500);
setInterval(go1,1000);
function go() {
	var ag=document.getElementById('4').innerHTML;
	if(ag==1) {
		if(document.getElementById('3').innerHTML=='99') {
			document.getElementById('3').innerHTML='00';
		}
		var b=document.getElementById('3').innerHTML;
			document.getElementById('3').innerHTML=+b+1;
	}
}
function go1() {
	var as=document.getElementById('4').innerHTML;
	if(as==1) {
		var ff=document.getElementById('1').innerHTML;
		var bs=document.getElementById('1').innerHTML;
		document.getElementById('1').innerHTML=+bs+1;
		if(ff=='59') {
			document.getElementById('min').innerHTML=+document.getElementById('min').innerHTML+1;
			document.getElementById('1').innerHTML='00';
		}
	}
}
function capture() {
	var min=document.getElementById('min').innerHTML;
	var sec=document.getElementById('1').innerHTML;
	var ms=document.getElementById('3').innerHTML;
	var rdy='<li>'+min+'&nbsp;:&nbsp;'+sec+'&nbsp;:&nbsp;'+ms+'</li>';
	document.getElementById('cl').innerHTML=document.getElementById('cl').innerHTML+rdy;
}
function reset() {
	document.getElementById('min').innerHTML='00';
	document.getElementById('1').innerHTML='00';
	document.getElementById('3').innerHTML='00';
}
function list() {
	document.getElementById('cl').innerHTML='';
}
function blk() {
	var a=document.getElementById('2').style.visibility;
	if(a=='hidden') {
		document.getElementById('2').style.visibility='visible';
		document.getElementById('2a').style.visibility='visible';
	}else{
		document.getElementById('2').style.visibility='hidden';
		document.getElementById('2a').style.visibility='hidden';
	}
}