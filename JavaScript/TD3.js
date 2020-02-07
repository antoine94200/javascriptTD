

        var scoreOrdi=0;
        var scoreUtilisateur=0;

        var afficheur = function(element) {
            var display = element;
            function setText(message) {
                display.innerHTML = message;
            }
            return {sendMessage : setText};
        }



        function comparer(choixOrdi, choixUtilisateur){
            if(choixUtilisateur==choixOrdi) {
                afficheur.sendMessage("il y a égalité.</br>L'ordinateur a choisi "+choixOrdi);
            }else if ((choixUtilisateur=="pierre" && choixOrdi== "ciseaux") ||(choixUtilisateur=="feuilles"&& choixOrdi=="pierres")||(choixUtilisateur=="ciseaux"&& choixOrdi=="feuilles")){
                afficheur.sendMessage("vous avez gagné.</br>L'ordinateur a choisi"+choixOrdi);
                scoreUtilisateur++;
            }else if((choixUtilisateur=="feuilles" && choixOrdi=="ciseaux")||(choixUtilisateur=="pierre"&& choixOrdi=="feuilles")||(choixUtilisateur=="ciseaux"&& choixOrdi=="pierres")){
                afficheur.sendMessage("vouis avez perdu.</br>L'ordinateur a choisi "+choixOrdi);
                scoreUtilisateur++;
            }

            var afficheur = new afficheur(document.querySelector("#statut-jeu"));
            function fchoixOrdi(){
                var choixOrdi = math.floor(Math.random()* 51);
                    if(choixOrdi <20){
                        choixOrdi="pierre";
                    }else if (choixOrdi>20 && choixOrdi<40){
                        choixOrdi="feuille";
                    }else if(choixOrdi>40) {
                        choixOrdi="ciseaux";
                    }
                    return choixOrdi;
            }

            function fchoixUtilisateur(choixUtilisateur) {
                if(choixUtilisateur=="pierre"){
                    choixUtilisateur="pierre";
                }else if (choixUtilisateur=="feuille"){
                    choixUtilisateur="feuille";
                }else if (choixUtilisateur=="ciseaux") {
                    choixUtilisateur="ciseaux";
                }
                return choixUtilisateur;
            }


            function main(){
                var tablechoixUtilisateur = document.querySelectorAll("#block-jeu button");
                var finjeu = 0;
                for(var i=0, taille= tablechoixUtilisateur.length; i<taille; i++) {
                    afficheur.sendMessage("le jeux commence, choisissez un objet");
                    tablechoixUtilisateur[i].addEventListener("click", function(){
                        choixUtilisateur = this.id;
                        var choixUtilisateur= fchoixUtilisateur(choixUtilisateur);
                        var choixOrdi= fchoixOrdi();
                        comparer (choixOrdi,choixUtilisateur);
                        finjeu++;

                        if(finjeu >4) {
                            afficheur.sendMessage("le jeu est terminé </br>Ordi :"+scoreOrdi+ "</br> Joueur :"+scoreUtilisateur);
                            return;
                        }
                    }
                }
            }
            

            
        }
        