function myUpperCase(string) {
    if (typeof string !== 'string') {
      throw new Error('Le paramètre doit être une chaîne de caractères.');
    }
  
    return string.toUpperCase();
  }
  

const inputString = "Hello world";
const result = myUpperCase(inputString);
console.log(result); 
