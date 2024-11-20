//1
let sentence = prompt("Enter your sentence :")
if (sentence.includes(" ")) 
    console.log("Includes the symbol ' '");
//2
function capitalizeFirstLetter(sentence) {
    if (sentence.length === 0) {
      return sentence;
    }
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
  }
//3

//4
function getAbbreviation(phrase) {
    let acronym = "";
    const words = phrase.split(" ");
    for (let i = 0; i < words.length; i++) {
      acronym += words[i].charAt(0).toUpperCase();
    }
    return acronym;
  }
//5