function reverseString(str){
    let reverseStr = "";
    for(let i= 0; i < str.length; i++){
        reverseStr = str[i]+reverseStr;
    }
    return reverseStr;
}

const word = prompt("inserisci parola");
console.log(reverseString(word));
    if 
        (reverseString(word) === word) {
        console.log("La parola è palindroma")}       
    else 
        console.log("La parola non è palindroma");