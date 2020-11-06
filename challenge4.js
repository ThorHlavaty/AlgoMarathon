const vowels = "aeiou";
const cons = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","z"];
function pigLatin(word) {
    let end = ""
    for (let index = 0; index < word.length; index++) {
        let element = word[index];
        console.log(element)
        if (cons.includes(word[0])) {
            console.log(word)
            end += element
            giveMeBack = word[0]
            word = word.substring(1)
            
        }
         else{
             break;
         }
    }
    if (end.length > 0){
    console.log(giveMeBack + word + end + "ay") }
    else {
        word + "way"
    }
}

pigLatin("whello")