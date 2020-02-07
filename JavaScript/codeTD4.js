
var line =11;
var row = 4;
var tab =[[],[],[],[],[],[],[],[],[],[],[],[]];
var tab2 =[];

var	tabN12=[];

var color = 'red';
var color1 = 'blue';
var color2 = 'green';
var color3 = 'yellow';
var color4 = 'purple';



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

	console.log(arg);

	if(arg==-1){





		if(tab2.length != 4){
			for(var i =1;i<=4;i++){
				var classList = document.getElementById('square'+line+'_'+i).classList;
				while (classList.length > 0) {
					classList.remove(classList.item(0));
				}
			}
			tab2=[];
			console.log(tab2);
		}
		else {

			if(tab2.length==4){

				tabN12.push(tab2);

				for(var i =0 ; i<tabN12.length;i++){

					for(var z =1;z<11;z++){
						var classList = document.getElementById('square'+z+'_1').classList;
						var classList = document.getElementById('square'+z+'_2').classList;
						var classList = document.getElementById('square'+z+'_3').classList;
						var classList = document.getElementById('square'+z+'_4').classList;
						while (classList.length > 0) {
							classList.remove(classList.item(0));
						}
					}
					console.log(tabN12);

					switch(i){
						case 0 :
							for(var a =0;a<4;a++){
								var text = tabN12[0][a];
								console.log(text);
								//document.getElementById("square11_"+a).classList.add(text);
							}

						break;
						case 1 :
							
						break;
						case 2 :
							
						break;
						case 3 :
							
						break;
						case 4 :
							
						break;
						case 5 :
							
						break;
						case 6 :
							
						break;
						case 7 :
							
						break;
						case 8 :
							
						break;
						case 9 :
							
						break;
						case 10 :
							
						break;
					}

					tabN12 [0];


				}
			}
		}
	}else if(arg==-2){
		console.log(tab2);
		for(var i =1;i<=4;i++){
			var classList = document.getElementById('square'+line+'_'+i).classList;
			while (classList.length > 0) {
				classList.remove(classList.item(0));
			}
		}
		tab2=[];
		tab[line] = [];
		console.log(tab2);

	}else{
		if(tab2.length==0){
			switch(arg){
				case 1 :
					document.getElementById("square11_1").classList.add('red');
					tab2.push(color);
					//tab[line][0].push(color);
				break;
				case 2 :
					document.getElementById("square11_1").classList.add('blue');
					tab2.push(color1);
					//tab[line][0].push(color1);
				break;
				case 3 :
					document.getElementById("square11_1").classList.add('green');
					tab2.push(color2);
					//tab[line][0].push(color2);
				break;
				case 4 :
					document.getElementById("square11_1").classList.add('yellow');
					tab2.push(color3);
					//tab[line][0].push(color3);
				break;
				case 5 :
					document.getElementById("square11_1").classList.add('purple');
					tab2.push(color4);
					//tab[line][0].push(color4);
				break;
			}
		}
		else if (tab2.length==1){
			switch(arg){
				case 1 :
					document.getElementById("square11_2").classList.add('red');
					tab2.push(color);
					//tab[line][1].push(color);
				break;
				case 2 :
					document.getElementById("square11_2").classList.add('blue');
					tab2.push(color1);
					//tab[line][1].push(color1);
				break;
				case 3 :
					document.getElementById("square11_2").classList.add('green');
					tab2.push(color2);
					//tab[line][1].push(color2);
				break;
				case 4 :
					document.getElementById("square11_2").classList.add('yellow');
					tab2.push(color3);
					//tab[line][1].push(color3);
				break;
				case 5 :
					document.getElementById("square11_2").classList.add('purple');
					tab2.push(color4);
					//tab[line][1].push(color4);
				break;
			}
		
		}
		else if(tab2.length==2){
			switch(arg){
				case 1 :
					document.getElementById("square11_3").classList.add('red');
					tab2.push(color);
					//tab[line][2].push(color);
				break;
				case 2 :
					document.getElementById("square11_3").classList.add('blue');
					tab2.push(color1);
					//tab[line][2].push(color1);
				break;
				case 3 :
					document.getElementById("square11_3").classList.add('green');
					tab2.push(color2);
					//tab[line][2].push(color2);
				break;
				case 4 :
					document.getElementById("square11_3").classList.add('yellow');
					tab2.push(color3);
					//tab[line][2].push(color3);
				break;
				case 5 :
					document.getElementById("square11_3").classList.add('purple');
					tab2.push(color4);
					//tab[line][2].push(color4);
				break;
			}
		}
		else if(tab2.length==3){
			switch(arg){
				case 1 :
					document.getElementById("square11_4").classList.add('red');
					tab2.push(color);
					//tab[line][3].push(color);
				break;
				case 2 :
					document.getElementById("square11_4").classList.add('blue');
					tab2.push(color1);
					//tab[line][3].push(color1);
				break;
				case 3 :
					document.getElementById("square11_4").classList.add('green');
					tab2.push(color2);
					//tab[line][3].push(color2);
				break;
				case 4 :
					document.getElementById("square11_4").classList.add('yellow');
					tab2.push(color3);
					//tab[line][3].push(color3);
				break;
				case 5 :
					document.getElementById("square11_4").classList.add('purple');
					tab2.push(color4);
					//tab[line][3].push(color4);
				break;
			}
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
			html +='<div id="square'+i+'_'+'1" class=""></div>';
			html +='<div id="square'+i+'_'+'2" class=""></div>';
			html +='<div id="square'+i+'_'+'3" class=""></div>';
			html +='<div id="square'+i+'_'+'4" class=""></div>';
		}
		html += '</div>'
		i++;
	}
	document.getElementById('Down').innerHTML = html;
	
}

function grosTrucDeBaiser(TabSub){


}
isDown();