function myCountChar(inputString, charToCount) {
    if (typeof inputString !== 'string' || typeof charToCount !== 'string' || charToCount.length !== 1) {
        console.log("Les paramètres doivent être une chaîne de caractères et un caractère unique.");
        return 0;
    }

    let count = 0;
    for (let i = 0; i < inputString.length; i++) {
        if (inputString.charAt(i) === charToCount) {
            count++;
        }
    }

    console.log(count);
    return count;
}

// Exemple d'utilisation de la fonction
const input = "Hello world.";
const charToFind = "l";
const occurrences = myCountChar(input, charToFind);
