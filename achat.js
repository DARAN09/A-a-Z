function validerAchat() {
    const nom = document.getElementById("nom").value.trim();
    const adresse = document.getElementById("adresse").value.trim();
    const telephone = document.getElementById("telephone").value.trim();
    const email = document.getElementById("email").value.trim();
    const paiement = document.getElementById("paiement").value;

    if (!nom || !adresse || !telephone || !email || !paiement) {
        alert("Veuillez remplir tous les champs.");
        return false;
    }

    document.getElementById("formAchat").style.display = "none";
    document.getElementById("confirmationMessage").style.display = "block";
}

function validerAchat() {
    const nom = document.getElementById("nom").value.trim();
    const adresse = document.getElementById("adresse").value.trim();
    const telephone = document.getElementById("telephone").value.trim();
    const email = document.getElementById("email").value.trim();
    const paiement = document.getElementById("paiement").value;

    if (!nom || !adresse || !telephone || !email || !paiement) {
        alert("Veuillez remplir tous les champs.");
        return false;
    }

    // Masquer le formulaire
    document.getElementById("formAchat").style.display = "none";

    // Afficher le message de confirmation
    document.getElementById("confirmationMessage").style.display = "block";

    // Afficher le bouton "Retour à l'accueil"
    const backToHomeButton = document.getElementById("backToHome");
    if (backToHomeButton) {
        backToHomeButton.style.display = "block";
    }

    return false; // Empêche l'envoi réel du formulaire
}