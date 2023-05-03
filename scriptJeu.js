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

window.onload = init;

function init() {
	let cartes = document.querySelectorAll('#tableauJeu .flip');
	for (let i = 0; i < cartes.length; i++) {
	  cartes[i].addEventListener('click', retournerCarte);
	}
	shuffle(tableauCartes);
  }

// Comparaison cartes 


// Retourner cartes
function retournerCarte(event) {
	let carte = event.target;
	if (carte.classList.contains('flip')) {
		// Retourner la carte en affichant la face visible
		carte.classList.remove('flip');
		carte.setAttribute("src", tableauCartes[parseInt(carte.id)]);
	} else {
		// Retourner la carte en affichant la face cachée
		carte.classList.add('flip');
		carte.setAttribute('src', '/ressources/dos_de_cartes.webp');
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




