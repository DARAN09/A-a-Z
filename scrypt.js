console.log("scrypt.js loaded");


function toggleProduits() {
    const produits = document.getElementById("produits");
    if (produits.style.display === "none") {
        produits.style.display = "block";
    } else {
        produits.style.display = "none";
    }


let compteur = 0;
function incrementerCompteur() {
    compteur++;
    document.getElementById("compteur").innerText = `Nombre de clics : ${compteur}`;

}

function afficherHeure() {
    const maintenant = new Date();
    const heure = maintenant.toLocaleTimeString();
    document.getElementById("horloge").innerText = `Heure actuelle : ${heure}`;
}

setInterval(afficherHeure, 1000);

const survol = document.getElementById("survol");
survol.onmouseover = function() {
    survol.style.color = "red";
};
survol.onmouseout = function() {
    survol.style.color = "black";
};

function filtrerProduits() {
    const recherche = document.getElementById("recherche").value.toLowerCase();
    const produits = document.querySelectorAll("#listeproduits li");

    produits.forEach(produit => {
        if (produit.innerText.toLowerCase().includes(recherche)) {
            produit.style.display = "list-item";
        } else {
            produit.style.display = "none";
        }
    });
}

function validerFormulaire() {
    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const motdepasse = document.getElementById("motdepasse").value.trim();
    const messageErreur = document.getElementById("messageErreur");

    //Reinitialiser le message d'erreur

    messageErreur.innerText = "";

    //Verifier si l'email est valide
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        messageErreur.innerText = "Adresse e-mail invalide.";
        return false;
    }

    //verifier si le mot de passe est valide
    if (motdepasse.length < 6) {
        messageErreur.innerText = "Le mot de passe doit comporter au moins 6 caractères.";
        return false;
    }
    alert("Inscription réussie !");
    return true;

}


function afficherNotification(Bienvenue) {
    const notification = document.createElement("div");
    notification.innerText = Bienvenue;
    notification.style.position = "fixed";
    notification.style.bottom = "10px";
    notification.style.right = "10px";
    notification.style.backgroundColor = "green";
    notification.style.color = "white";
    notification.style.padding = "10px";
    notification.style.borderRadius = "5px";

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

//Exemple d'utilisation
afficherNotification("Bienvenue !");

window.onscroll = function() {
    const bouton = document.getElementById("retourHaut");
    if (document.documentElement.scrollTop > 200) {
        bouton.style.display = "block";
    } else {
        bouton.style.display = "none";
    }
};
function retourEnHaut() {
    window.scrollTo({ top: 0, behavior: "smooth"});
}

function traiterFormulaire() {
    // Récupérer les valeurs des champs du formulaire
    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const motdepasse = document.getElementById("motdepasse").value.trim();

}

// Afficher les données dans la console ou dans un serveur
console.log("nom:", nom);
console.log("email:", email);
console.log("motdepasse:", motdepasse);

// Afficher un message de succes
alert("Merci ${nom}, votre inscription a été prise en compte !");

// empêcher le rechargement de la page
return false;
}


window.onscroll = function() {
    const backToTop = document.getElementById("backToTop");
    if (document.documentElement.scrollTop > 200) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function afficherHeure() {
    const maintenant = new Date();
    const heure = maintenant.toLocaleTimeString().padStart(2, '0');
    const minutes = maintenant.getMinutes().toString().padStart(2, '0');
    const secondes = maintenant.getSeconds().toString().padStart(2, '0');
    const heureActuelle = `${heures}:${minutes}:${secondes}`;
    document.getElementById("current-time").innerText = `Heure actuelle : ${heureActuelle}`;
}

//Mettre a jour l'heure toutes les secondes
setInterval(afficherHeure, 1000);

// Appeler la fonction immédiatement pour afficher l'heure dès le chargement
afficherHeure();
