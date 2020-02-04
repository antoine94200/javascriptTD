
    var random=FirstRandom();
    console.log(random);

    var tab1=[];
    
    //[[0,0],[0,0],[0,0],[0,0],[0,0]]
    var turn=0;

    function FirstRandom(){
        return Math.floor(Math.random()*101);
    }

    function startOrRestart(){
        if(tab1.length>4){
            tab1.shift();
        }
        tab1.push([random,-1]);

        random=FirstRandom();
        turn=0;
        console.log(random);
        displayTab();
     }


    function Data(){
        if(tab1.length>4){
            tab1.shift();
        }

        var arg =document.getElementById('name').value;

        if(arg>=0||arg<=100){
            
            if(arg<random){

                isUp()
                

            }
            else if(arg>random){

                isDown()
                
            }
            else if(arg==random){
            
                isWins();
    
            }
            
        }
        else {
            console.log('wallah tape qqch de concret frr ')
        }
    }

    function displayTab() {
        html = '<ul>';
        for (let result of tab1) { //[random,turn]
            html += '<li> Nombre recherché : ';
            html += result[0]; // random
            html += ' | Tentatives : ';
            html += result[1]; // turn
            html += ' => PERDU';
            html += '</li>';
        }
        html += '</ul>';
        document.getElementById("tableau").innerHTML = html;
    }

    function isWins(){

        
                turn++;
                
                tab1.push([random,turn]);

                random=FirstRandom();
                turn=0;
                console.log(random);

                displayTab();
                console.log(tab1);
                html ='<p>';
                html +='BRAVO';
                html += '</p>';
                document.getElementById("Win").innerHTML = html;

    }
    function isUp(){

        
                turn++;

                html ='<p>';
                html +='PLUS HAUT';
                html += '</p>';
                document.getElementById("UP").innerHTML = html;
               
                
    }
    function isDown(){
        
        turn++;
        
        html ='<p>';
        html +='PLUS BAS';
        html += '</p>';
        document.getElementById("Down").innerHTML = html;
        
    }

    