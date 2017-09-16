//----------checkbox
	function func1(){
		let chbox = document.getElementById('check');
		if(chbox.checked){
			console.log("yes");
		}
		else{
			console.log("no");
		}
	}

	//----------radio
	function func2(){
		let radi = document.getElementsByName("radio");
		for(let i = 0; i < radi.length; i++){
			if(radi[i].checked){
				console.log("selected " + i + " element");
			}
		}
	}

//----------select
function func3(){
	let sel = document.getElementById("mySelect").selectedIndex;
	let options = document.getElementById("mySelect").options;

	console.log("Selected option " + options[sel].text);
}

//----------range
function func4(){
	let ran = document.getElementById("ran");
	let info = document.getElementById("info");
	let div = document.getElementById("test");
	info.value = ran.value;
	div.style.width = ran.value + "px";
}

//----------range-border
function func5(){
	let rtl = document.getElementById("rtl").value;
	let rtr = document.getElementById("rtr").value;
	let rbr = document.getElementById("rbr").value;
	let rbl = document.getElementById("rbl").value;
	let ttl = document.getElementById("ttl");
	let ttr = document.getElementById("ttr");
	let tbr = document.getElementById("tbr");
	let tbl = document.getElementById("tbl");

	let blocks = document.getElementById("blocks");

	ttl.value = rtl;
	ttr.value = rtr;
	tbr.value = rbr;
	tbl.value = rbl;

	blocks.style.borderRadius = rtl +"px " + rtr + "px" + rbr + "px" + rbl + "px";
  console.log(rtl);
}
