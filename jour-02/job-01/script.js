function myChangeBackgroundColor() {
    // Récupérez la largeur de l'écran
    var screenWidth = window.innerWidth;

    // Sélectionnez la balise <html>
    var htmlElement = document.documentElement;

    // Définissez les couleurs en fonction de la taille de l'écran
    if (screenWidth >= 1337) {
        htmlElement.style.backgroundColor = "#ffb603";
    } else if (screenWidth >= 505 && screenWidth <= 1336) {
        htmlElement.style.backgroundColor = "#d90429";
    } else if (screenWidth <= 504) {
        htmlElement.style.backgroundColor = "#003049";
    }
}

// Appelez la fonction au chargement de la page
myChangeBackgroundColor();
