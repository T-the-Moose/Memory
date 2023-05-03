// https://replit.com/@Giridharhackclu/Final-Memory-Game#style.css

// Tableau des cartes retournées
const tableauCartes=[
	"/ressources/memory-legume/1.svg",
	"/ressources/memory-legume/1.svg",
	"/ressources/memory-legume/2.svg",
	"/ressources/memory-legume/2.svg",
	"/ressources/memory-legume/3.svg",
	"/ressources/memory-legume/3.svg",
	"/ressources/memory-legume/4.svg",
	"/ressources/memory-legume/4.svg",
	"/ressources/memory-legume/5.svg",
	"/ressources/memory-legume/5.svg",
	"/ressources/memory-legume/6.svg",
	"/ressources/memory-legume/6.svg"
];

let cartesRetournees = [];

window.onload = init;

function init() {
	let cartes = document.querySelectorAll('#tableauJeu .flip');
	for (let i = 0; i < cartes.length; i++) {
	  cartes[i].addEventListener('click', retournerCarte);
	}
	shuffle(tableauCartes);
	comparerCartes();
  }

// Comparaison des cartes
function comparerCartes() {
    let carte1 = cartesRetournees[0];
    let carte2 = cartesRetournees[1];
    if (tableauCartes[parseInt(carte1.id)] === tableauCartes[parseInt(carte2.id)]) {
        // Les cartes sont identiques, on laisse les cartes retournées
        cartesRetournees = [];
    } else {
        // Les cartes sont différentes, on les retourne après 2 secondes
        setTimeout(() => {
            carte1.classList.add('flip');
            carte2.classList.add('flip');
            carte1.setAttribute('src', '/ressources/dos_de_cartes.webp');
            carte2.setAttribute('src', '/ressources/dos_de_cartes.webp');
            cartesRetournees = [];
        }, 2000);
    }
}

// Retourner cartes
function retournerCarte(event) {
	let carte = event.target;
	if (carte.classList.contains('flip')) {
		// Retourner la carte en affichant la face visible
		carte.classList.remove('flip');
		carte.setAttribute("src", tableauCartes[parseInt(carte.id)]);
		cartesRetournees.push(carte);
		if (cartesRetournees.length === 2) {
            comparerCartes();
        }
	} else {
		// Retourner la carte en affichant la face cachée
		carte.classList.add('flip');
		carte.setAttribute('src', '/ressources/dos_de_cartes.webp');
		cartesRetournees.pop();
	}
	console.log(carte.id);
}

// Mélanger le tableau de carte
function shuffle(tableauCartes) {
	let i, j, tmp;
	for (i = tableauCartes.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		tmp = tableauCartes[i];
		tableauCartes[i] = tableauCartes[j];
		tableauCartes[j] = tmp;
	}
	return tableauCartes;
}

/* Fonction victoire 
function victoire() {
	if (cartesRetournees) {

	}
}

*/

