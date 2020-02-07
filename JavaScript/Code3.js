

function afficher(){
            var Mynamet = document.getElementById('sourceI');
            var Myutil = document.getElementById('test1');
            Myutil.innerHTML = "Utilisateur: " + Mynamet.value;
            }

function displayScore(){
           var Myscore = document.getElementById('score');
           Myscore.innerHTML = "Tour numéro: " + finJeu + " sur 42. <b>Ordinateur:" + scortO + " Vous: " + scortU +"</b>";
           return
            }


var Afficheur = function(element) {
        var display = element; // cette variable est chargée de prendre l'élement passer au niveau du constructeur
  
        function setText(message) { // chargée de modifier le contenu de l'element passé dans le constructeur par un message qui lui sera passé
            display.innerHTML = message; // methode qui change le texte htlm de l'élement par le message
        }
        return {sendMessage : setText};
    }
 
    var scortO = 0;
    var scortU = 0;
    var prevchoix=""; // ************* variable pour eviter 2 coups identiques *******************
    var finJeu = 0;
  
    function comparer(_choixOrdi, _choixUtilisateur) {
  
        if(_choixUtilisateur == _choixOrdi) {
            afficheur.sendMessage("Il y a egalite.</br>L'ordinateur a choisi " + _choixOrdi);
        }
        else if((_choixUtilisateur == "pierre" && _choixOrdi == "ciseaux") || (_choixUtilisateur == "feuille" && _choixOrdi == "pierre") || (_choixUtilisateur == "ciseaux" && _choixOrdi == "feuille")) {
            afficheur.sendMessage("Vous avez gagne.</br>L'ordinateur a choisi " + _choixOrdi);
            scortU++;
        }
        else if((_choixUtilisateur == "feuille" && _choixOrdi == "ciseaux") || (_choixUtilisateur == "piere" && _choixOrdi == "feuille") || (_choixUtilisateur == "ciseaux" && _choixOrdi == "pierre")) {
            afficheur.sendMessage("Vous avez perdu.</br>L'ordinateur a choisi " + _choixOrdi);
            scortO++;
        }
  
    }
  var afficheur = new Afficheur(document.querySelector("#statut-jeu")); // création de l'objet qui va modifier le texte du résultat du jeu
  
    function FchoixOrdi() {
        var choixOrdi = Math.floor(Math.random() * 51);
  
            if (choixOrdi < 20) {
                choixOrdi = "pierre";
            }
            else if(choixOrdi > 20 && choixOrdi < 40) {
                choixOrdi = "feuille";
            }
            else if(choixOrdi > 40) {
                choixOrdi = "ciseaux";
            }
            return choixOrdi;
    }
  
    function FchoixUtilisateur(_choixUtilisateur) {
  
            if(_choixUtilisateur == "pierre") {
                _choixUtilisateur = "pierre";
            }
            else if(_choixUtilisateur == "feuille") {
                _choixUtilisateur = "feuille";
            }
            else if(_choixUtilisateur == "ciseaux") {
                _choixUtilisateur = "ciseaux";
            }
            if(prevchoix == _choixUtilisateur){_choixUtilisateur= "impossible"; } // ************  coup identique *****************
           return _choixUtilisateur;
    }
  
   

var startTime = 0
var start = 0
var end = 0
var diff = 0
var timerID = 0
//window.onload = chronoStart;
function chrono(){
	end = new Date()
	diff = end - start
	diff = new Date(diff)
	var msec = diff.getMilliseconds()
	var sec = diff.getSeconds()
	var min = diff.getMinutes()
	var hr = diff.getHours()-1
	if (min < 10){
		min = "0" + min
	}
	if (sec < 10){
		sec = "0" + sec
	}
	if(msec < 10){
		msec = "00" +msec
	}
	else if(msec < 100){
		msec = "0" +msec
	}
	document.getElementById("chronotime").value = hr + ":" + min + ":" + sec + ":" + msec
	timerID = setTimeout("chrono()", 10)
}
function chronoStart(){
	document.chronoForm.startstop.value = "stop!"
	document.chronoForm.startstop.onclick = chronoStop
	document.chronoForm.reset.onclick = chronoReset
	start = new Date()
	chrono()
}
function chronoContinue(){
	document.chronoForm.startstop.value = "stop!"
	document.chronoForm.startstop.onclick = chronoStop
	document.chronoForm.reset.onclick = chronoReset
	start = new Date()-diff
	start = new Date(start)
	chrono()
}
function chronoReset(){
	document.getElementById("chronotime").value = "0:00:00:000"
	start = new Date()
}
function chronoStopReset(){
	document.getElementById("chronotime").value = "0:00:00:000"
	document.chronoForm.startstop.onclick = chronoStart
}
function chronoStop(){
	document.chronoForm.startstop.value = "start!"
	document.chronoForm.startstop.onclick = chronoContinue
	document.chronoForm.reset.onclick = chronoStopReset
	clearTimeout(timerID)
}

function displayName(){
  var x = document.getElementById("name").value;
  document.getElementById("texte2").value=x; 

}

 function main() {
  
                    // déclaration de notre tableau pions qui va contenir l'ensemble des boutons
                    var tabchoixUtilisateur = document.querySelectorAll("#block-jeu button"); // la méthode va selectionner tous les boutons présent dans la div block-jeu et les retourner dans notre tableau pions
             

                    for(var i = 0, taille = tabchoixUtilisateur.length; i < taille; i++){
                            //if ( valide == 1) {  afficheur.sendMessage("Le jeu peut commencer. choisissez un objet"); 
                                    

                                    afficheur.sendMessage("Le jeu peut commencer. choisissez un objet"); // modification du message + choix du joueur
                                    tabchoixUtilisateur[i].addEventListener("click", function(){
                                    choixUtilisateur = this.id;
                                    var choixU = FchoixUtilisateur(choixUtilisateur);
                            if (choixU == "impossible"){afficheur.sendMessage("Vous avez selectionne le meme objet 2 fois de suite. Recommencez !") ;}
                                else {
                                        var choixO = FchoixOrdi();
                                        comparer(choixO, choixU);
                                        prevchoix = choixU; //******************* Affectation pour coup precedent ********************
                                        finJeu++;
                                        displayScore();
                                    }
                            if(finJeu >= 42){
                                        afficheur.sendMessage("Le jeu est fini</br>Ordi : " + scortO + "</br>Joueur : " + scortU);
                                        return;
                                    }
                                });
                                }
                            }
  
    main();
  
  