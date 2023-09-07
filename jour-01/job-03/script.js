function myIsInString(haystack, needle) {
    if (typeof haystack !== 'string' || typeof needle !== 'string') {
        console.log("Les paramètres doivent être des chaînes de caractères.");
        return false;
    }
     return haystack.includes(needle);
}

const mainString = "Hello world.";
const subString = "Hello";
const isInString = myIsInString(mainString, subString);
console.log(isInString);
