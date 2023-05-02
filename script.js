window.onload = init;


function init() {
    document.getElementById("nom").addEventListener("input", validationNom);
    document.getElementById("mdp").addEventListener("input", validationMdp);
    document.getElementById("mdpV").addEventListener("input", verificationMdp);
    document.getElementById("email").addEventListener("inpu", validationEmail);
}

// Validation nom
function validationNom() {
    let nom = document.getElementById("nom").value;
    let error = document.getElementById("imgError");
    if (nom.length>=3) {
        document.getElementById("nbCaract").style.color = "green";
        error.setAttribute("src", "ressources/check.svg");
        error.style.display = "inline";
    } else {
        document.getElementById("nbCaract").style.color = "red";
        error.setAttribute("src", "/ressources/error.svg");
    }
}

// Validation adresse email
function validationEmail() {
    let email = document.getElementById("email").value;
    if (email.match("^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i")) {
        document.getElementById("emailVerif").style.color = "green";
    } else {
        document.getElementById("emailVerif").style.color = "red";
    }
}

// Validation mdp
function validationMdp() {
    let mdpTaille = document.getElementById("mdp").value;
    let mdpChiffre = document.getElementById("mdp").value;
    let mdpSymbole = document.getElementById("mdp").value;
    let error2 = document.getElementById("imgError2");
    if (mdpTaille.length>=6 && mdpChiffre.match( /[0-9]/g) && mdpSymbole.match(/[^\w\s]/g)) {
        document.getElementById("nbMdp").style.color = "green";
        error2.setAttribute("src", "ressources/check.svg");
        error2.style.display = "inline";
    } else {
        document.getElementById("nbMdp").style.color = "red";
        error2.setAttribute("src", "/ressources/error.svg");
    }
}

// Vérification mdp 
function verificationMdp() {
    let mdp = document.getElementById("mdp").value;
    let mdpVerif = document.getElementById("mdpV").value;
    let error3 = document.getElementById("imgError3");
    if (mdp == mdpVerif) {
        document.getElementById("verifMdp").style.color = "green";
        error3.setAttribute("src", "ressources/check.svg");
        error3.style.display = "inline";
    } else {
        document.getElementById("verifMdp").style.color = "red";
        error3.setAttribute("src", "/ressources/error.svg");
    }
}
