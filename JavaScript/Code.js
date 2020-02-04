var ExoB=34;

var toto=[34,'Hello',true];

for (var i = 0; i <toto.length; i++) {

		switch (typeof (toto[i]))
	{
		case 'number':
			console.log('Cette variable est un nombre');
		break;
		case 'string':
			console.log('Cette variable est une chaine de caractére');
		break;
		case 'boolean':
			console.log('Cette variable est un boolean');
		break;
		default:
			console.log('Cette variable nest pas défini');
	}
}

for (var i = 0; i < 10; i++) {
	console.log(i);
}
var toto2 = [2];


var ExoB2=2;

function isEven(exoD){
		
		if(!Number.isInteger(exoD)){
			console.log('il est nest pas un entier = '+-1);
		}
		else if(exoD%2==0){
			console.log('il est paire = '+1);
		}
		else{
			console.log('il nest pas paire '+0);
		}
}

isEven(ExoB2);

var test = 4;

var test2 =2;

function compare(exoEA,exoEB){

	if(!Number.isInteger(exoEA)||!Number.isInteger(exoEB)){
		console.log('Error');
	}
	else if (exoEA<exoEB){
		console.log('B est superieur '+-1);
	}
	else if (exoEA==exoEB){
		console.log('A et B sont egaux '+0);
	}
	else if(exoEA>exoEB){
		console.log('A est superieur '+1);
	}
}

compare(test,test2);

console.log('Jeremy, Antoine, Teddy');

console.log('TD2');
