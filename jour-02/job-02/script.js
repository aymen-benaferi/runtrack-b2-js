// Sélectionnez le paragraphe et le bouton par leur ID
var countDisplayer = document.getElementById("count-displayer");
var addCountBtn = document.getElementById("add-count-btn");

// Initialisez le compteur
var counter = 0;

// Définissez la fonction pour incrémenter le compteur
function myAddCount() {
    // Incrémentez le compteur
    counter++;

    // Mettez à jour le texte du paragraphe avec la nouvelle valeur du compteur
    countDisplayer.textContent = counter;
}

// Ajoutez un gestionnaire d'événement au bouton pour appeler la fonction au clic
addCountBtn.addEventListener("click", myAddCount);
