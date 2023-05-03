window.onload = init;

function init() {

}

// Tableau des cartes 
let motifsCartes=[1,1,2,2,3,3,4,4,5,5,6,6];

// Tableau de l'état des cartes (0=cachée 1=retournée -1=enlevée)
let etatsCartes=[0,0,0,0,0,0,0,0,0,0,0,0];

// Tableau avec cartes retournées
let cartesRetournees=[];

// Variable 
let nbPairesTrouvees = 0;

// Tableau contenant les objets des éléments img de l'interface utilisateur
let imgCartes=document.getElementById("tableauJeu").getElementsByTagName("img");	

for(var i=0;i<imgCartes.length;i++){
	imgCartes[i].noCarte=i; //Ajout de la propriété noCarte à l'objet img
	imgCartes[i].onclick=function(){
		controleJeu(this.noCarte);
	}                      
}

initialiseJeu();

function majAffichage(noCarte) {
	switch(etatsCartes[noCarte]){
		case 0:
			imgCartes[noCarte].src="/ressources/dos_de_cartes.webp";
			break;
		case 1:
			imgCartes[noCarte].src="carte"+motifsCartes[noCarte]+"/ressources/chiens/1.webp";
			break;
		case -1:
			imgCartes[noCarte].style.visibility="hidden";
			break;
	}
}


function rejouer() {
	alert("Bravo !");
	location.reload();
}

function initialiseJeu() {
	for(var position=motifsCartes.length-1; position>=1; position--){
		var hasard=Math.floor(Math.random()*(position+1));
		var sauve=motifsCartes[position];
		motifsCartes[position]=motifsCartes[hasard];
		motifsCartes[hasard]=sauve;
	}
}

function controleJeu(noCarte) {
    if(cartesRetournees.length<2) {
    }
    if(etatsCartes[noCarte]==0){
        etatsCartes[noCarte]=1;
        cartesRetournees.push(noCarte);
        majAffichage(noCarte);
    }
    if(cartesRetournees.length==2){
        var nouveauEtat=0;
        if (motifsCartes[cartesRetournees[0]]==motifsCartes[cartesRetournees[1]]){
            nouveauEtat=-1;
            nbPairesTrouvees++;
        }
        etatsCartes[cartesRetournees[0]]=nouveauEtat;
        etatsCartes[cartesRetournees[1]]=nouveauEtat;
    }
}

setTimeout(function() {
    majAffichage(cartesRetournees[0]);
    majAffichage(cartesRetournees[1]);
    cartesRetournees=[];
    if(nbPairesTrouvees==10){
        rejouer();
    }
},750);

































// http://hironak.fr/article/memory/
//https://github.com/SophieMdl/Memory
// http://mathartung.xyz/isn/projet-javascript-pour-la-specialite-isn/jeu-de-memory/3.html