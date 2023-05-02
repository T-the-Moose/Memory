window.onload = init;

function init() {
    document.getElementById("tableauJeu").addEventListener("click", comptage)
    document.getElementsByClassName("cartes").addEventListener("click", flipCard);
}

// Fonction flip cartes
function flipCard() {
    document.getElementsByClassName("cartes").style.transform = "rotate(180deg)"
}





// Tableau des cartes 
let motifsCartes=[1,1,2,2,3,3,4,4,5,5,6,6];

// Tableau de l'état des cartes (0=cachée 1=retournée -1=enlevée)
let etatsCartes=[0,0,0,0,0,0,0,0,0,0,0,0];

// Tableau avec cartes retournées
let cartesRetournees=[];

// Variable 
let nbPairesTrouvees = 0;



// Compteur de coups
let nbCoups = 0;

// Fonction comptage de coups 
function comptage() {

}
































// http://hironak.fr/article/memory/
//https://github.com/SophieMdl/Memory
// http://mathartung.xyz/isn/projet-javascript-pour-la-specialite-isn/jeu-de-memory/3.html