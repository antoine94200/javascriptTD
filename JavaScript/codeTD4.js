var tab = ['Grey','Grey','tata','toto'];

var tab1 = [tab,tab,tab,tab,tab,tab,tab,tab,tab];

var tab2 =[];

var color = "red";
var color1 = "blue";
var color2 = "green";
var color3 = "yellow";
var color4 = "purple";



//console.log(tab1);

function FirstRandom(){
    return Math.floor(Math.random()*5);
}



function isCreate(){

	var tab3=[];

	while(tab3.length<4){

		isTake(tab3);

	}
	console.log(tab3);
	return tab3;
}

function isChangeArray(){

	while(tab1.length<9){
		tab1.push(isCreate());
		console.log(tab1);
	}

}

function isTake(argTab){

	var randomC =FirstRandom();

	switch(randomC){
		case 1 :
		argTab.push(color);
		break;
		case 2 :
		argTab.push(color1);
		break;
		case 3 :
		argTab.push(color2);
		break;
		case 4 :
		argTab.push(color3);
		break;
		case 5 :
		argTab.push(color4);
		break;
		default:
		break;
	}

}

function addPlayerChoice(arg){

	switch(arg){
		case 1 :
		tab2.push(color);
		break;
		case 2 :
		tab2.push(color1);
		break;
		case 3 :
		tab2.push(color2);
		break;
		case 4 :
		tab2.push(color3);
		break;
		case 5 :
		tab2.push(color4);
		break;
		default:
		break;
	}

}


function isChoice(arg){

	if(tab2.length==0){
		switch(arg){
			case 1 :
				var elmt=document.getElementById("square11_1").classList.add('red');
				tab2.push(color1);
			break;
			case 2 :
				var elmt=document.getElementById("square11_1").classList.add('blue');
				tab2.push(color1);
			break;
			case 3 :
				var elmt=document.getElementById("square11_1").classList.add('green');
				tab2.push(color2);
			break;
			case 4 :
				var elmt=document.getElementById("square11_1").classList.add('yellow');
				tab2.push(color3);
			break;
			case 5 :
				var elmt=document.getElementById("square11_1").classList.add('purple');
				tab2.push(color4);
			break;
			default:
			break;
		}
	}
	else if (tab2.length==1){
		switch(arg){
			case 1 :
				var elmt=document.getElementById("square11_2").classList.add('red');
				tab2.push(color1);
			break;
			case 2 :
				var elmt=document.getElementById("square11_2").classList.add('blue');
				tab2.push(color1);
			break;
			case 3 :
				var elmt=document.getElementById("square11_2").classList.add('green');
				tab2.push(color2);
			break;
			case 4 :
				var elmt=document.getElementById("square11_2").classList.add('yellow');
				tab2.push(color3);
			break;
			case 5 :
				var elmt=document.getElementById("square11_2").classList.add('purple');
				tab2.push(color4);
			break;
			default:
			break;
		}
	
	}
	else if(tab2.length==2){
		switch(arg){
			case 1 :
				var elmt=document.getElementById("square11_3").classList.add('red');
				tab2.push(color1);
			break;
			case 2 :
				var elmt=document.getElementById("square11_3").classList.add('blue');
				tab2.push(color1);
			break;
			case 3 :
				var elmt=document.getElementById("square11_3").classList.add('green');
				tab2.push(color2);
			break;
			case 4 :
				var elmt=document.getElementById("square11_3").classList.add('yellow');
				tab2.push(color3);
			break;
			case 5 :
				var elmt=document.getElementById("square11_3").classList.add('purple');
				tab2.push(color4);
			break;
			default:
			break;
		}
	}
	else if(tab2.length==3){
		switch(arg){
			case 1 :
				var elmt=document.getElementById("square11_4").classList.add('red');
				tab2.push(color1);
			break;
			case 2 :
				var elmt=document.getElementById("square11_4").classList.add('blue');
				tab2.push(color1);
			break;
			case 3 :
				var elmt=document.getElementById("square11_4").classList.add('green');
				tab2.push(color2);
			break;
			case 4 :
				var elmt=document.getElementById("square11_4").classList.add('yellow');
				tab2.push(color3);
			break;
			case 5 :
				var elmt=document.getElementById("square11_4").classList.add('purple');
				tab2.push(color4);
			break;
			default:
			break;
		}
	}
}

function isDown(){

	var i=0;
	var html = '';
	while(i<12){
		
		html += '<div>';
		if(i==0){
			html +='<div id="square'+i+'_'+'1" class="bouttontake1"></div>';
			html +='<div id="square'+i+'_'+'2" class=" bouttontake1"></div>';
			html +='<div id="square'+i+'_'+'3" class=" bouttontake1"></div>';
			html +='<div id="square'+i+'_'+'4" class=" bouttontake1"></div>';
		}else if(i>0&&i<11){
			html +='<div id="square'+i+'_'+'1" class="bouttontake"></div>';
			html +='<div id="square'+i+'_'+'2" class="bouttontake"></div>';
			html +='<div id="square'+i+'_'+'3" class="bouttontake"></div>';
			html +='<div id="square'+i+'_'+'4" class="bouttontake"></div>';
		}
		else {
			html +='<div id="square'+i+'_'+'1" class="bouttontake2"></div>';
			html +='<div id="square'+i+'_'+'2" class="bouttontake2"></div>';
			html +='<div id="square'+i+'_'+'3" class="bouttontake2"></div>';
			html +='<div id="square'+i+'_'+'4" class="bouttontake2"></div>';
			html +='<button id="submit" class="">Submit</button>';
			html +='<button id="delete" class="">Delete</button>';
		}
		html += '</div>'
		i++;
	}
	document.getElementById('Down').innerHTML = html;
	
}
isDown();