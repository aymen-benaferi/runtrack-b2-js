// Sélectionnez les éléments du DOM par leur ID
var textDisplayer = document.getElementById("text-displayer");
var inputText = document.getElementById("input-text");

// Fonction pour afficher le texte de l'input dans le paragraphe
function myDisplayText() {
    textDisplayer.textContent = inputText.value;
}

// Fonction pour mettre le texte en gras
function myTurnBold() {
    textDisplayer.style.fontWeight = "bold";
}

// Fonction pour mettre le texte en italique
function myTurnItalic() {
    textDisplayer.style.fontStyle = "italic";
}

// Fonction pour enlever les effets appliqués au texte
function myClearText() {
    textDisplayer.textContent = ""; // Efface le texte
    inputText.value = ""; // Efface la valeur de l'input
    textDisplayer.style.fontWeight = "normal"; // Remet le texte en poids normal
    textDisplayer.style.fontStyle = "normal"; // Remet le texte en style normal
}
