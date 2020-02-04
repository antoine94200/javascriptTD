
    var random=Math.floor(Math.random()*101);
    var arg2=[];
    if(arg2.length==0){
        console.log('Pas de sauvegarde');
    }else{
        var name = localStorage.getItem(arg2);
    }
    console.log(arg2);
    
    var tab1=[];
    var win=true;
    var turn=0;
function sendData(event){

    var random2=random;
    var arg =document.getElementById('name').value;
   
   console.log('la valeur acutlle est '+  random);
   
   
    if(arg>=0||arg<=100){
        
        if(arg<random){

            console.log('wallah tes trop bas khey');
            //arg2.push(arg);
            turn++;
            

        }
        else if(arg>random){

            console.log('wallah tes trop loin frr');
            //arg2.push(arg);
            turn++;
            
        }
        else if(arg==random){
        
            console.log('wallah cest ca bsartek');
            turn++;
            
           tab1.push(random,turn);
  
        }
        console.log(tab1);
        
    }
    else {
        console.log('wallah tape qqch de concret frr ')
    }
}
console.log(JSON.stringify({ x: 5, y: 6 }));
arg2.push(tab1);
localStorage.setItem(arg2);