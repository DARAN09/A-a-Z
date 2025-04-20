function traiterFormulaire() {
    // Récupérer les valeurs des champs du formulaire
    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const motdepasse = document.getElementById("motdepasse").value.trim();

    // Vérifier si tous les champs sont remplis
    if (!nom || !email || !motdepasse) {
        document.getElementById("messageErreur").innerText = "Tous les champs doivent être remplis.";
        return false; // Empêcher l'envoi du formulaire
    } // Fin de la vérification des champs

   const telephone = document.getElementById("telephone").value.trim();
   const regexTelephone = /^[0-9]{10}$/;
   if (!regexTelephone.test(telephone)) {
    document.getElementById("messageErreur").innerText = "Veuillez entrer un numéro de téléphone valide (10 chiffres).";
    return false;
   }
    // Afficher les données dans la console (ou les envoyer à un serveur)
    console.log("nom :", nom);
    console.log("email :", email);
    console.log("motdepasse :", motdepasse);
    console.log("telephone :", telephone);

    // Afficher un message de confirmation
    alert(`Merci ${nom}, votre inscription a été prise en compte !`);

    return false; // Empêcher l'envoi du formulaire
}

document.getElementById("motdepasse").addEventListener("input", function() {
    const motdepasse = this.value;
    const forceMotDePasse = document.getElementById("forceMotDePasse");
    let force = 0;

    if (motdepasse.lenght >= 6) force += 25;
    if (/[A-Z]/.test(motdepasse)) force += 25;
    if (/[0-9]/.test(motdepasse)) force += 25;
    if (/[@$!%*?&]/.test(motdepasse)) force += 25;

    forceMotDePasse.value = force;
});

