window.onload = init;


function init() {
    document.getElementById("nom").addEventListener("input", validationNom);
    document.getElementById("mdp").addEventListener("input", validationMdp);
    document.getElementById("mdpV").addEventListener("input", verificationMdp);
    document.getElementById("email").addEventListener("input", validationEmail);
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
    let error1 = document.getElementById("imgError1");
    if (email.match( /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/g)) {
        document.getElementById("emailVerif").style.color = "green";
        error1.setAttribute("src", "ressources/check.svg");
        error1.style.display = "inline";
    } else {
        document.getElementById("emailVerif").style.color = "red";
        error1.setAttribute("src", "/ressources/error.svg");
    }
}

// Validation mdp
function validationMdp() {
    let mdpTaille = document.getElementById("mdp").value;
    let errorTest = document.getElementById("imgError2");
    if (mdpTaille.length>=6) {
        document.getElementById("nbMdp").style.color = "red";
        errorTest.setAttribute("src", "ressources/error.svg");
        errorTest.style.display = "inline";
        document.getElementById("faible").style.borderTop = "solid red 1px";
    } else {
        document.getElementById("nbMdp").style.color = "red";
        errorTest.setAttribute("src", "/ressources/error.svg");
    }
    let mdpChiffre = document.getElementById("mdp").value;
    let errorTest1 = document.getElementById("imgError2");
    if (mdpTaille.length>=6 && mdpChiffre.match( /[0-9]/g)) {
        document.getElementById("nbMdp").style.color = "green";
        errorTest1.setAttribute("src", "ressources/check.svg");
        errorTest1.style.display = "inline";
        document.getElementById("moyen").style.borderTop = "solid gold 5px";
    } else {
        document.getElementById("nbMdp").style.color = "red";
        errorTest1.setAttribute("src", "/ressources/error.svg");
    }
    let mdpSymbole = document.getElementById("mdp").value;
    let errorTest2 = document.getElementById("imgError2");
    if (mdpSymbole.match(/[^\w\s]/g)) {
        document.getElementById("nbMdp").style.color = "green";
        errorTest2.setAttribute("src", "ressources/check.svg");
        errorTest2.style.display = "inline";
        document.getElementById("fort").style.borderTop = "solid green 10px";
    } else {
        document.getElementById("nbMdp").style.color = "red";
        errorTest2.setAttribute("src", "/ressources/error.svg");
    }
    console.log(validationMdp);
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


