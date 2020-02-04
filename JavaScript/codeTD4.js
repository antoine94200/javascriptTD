var tab = ['Grey','Grey','Grey','Grey'];

var tab1 = [tab,tab,tab,tab,tab,tab,tab,tab,tab];

var tab2 =[];

var color = "red";
var color1 = "blue";
var color2 = "green";
var color3 = "yellow";
var color4 = "black";



console.log(tab1);

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


function isChoice(){



console.log("tatatatatatat");





}

