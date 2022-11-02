const pick = prompt("Pari o dispari?").toLowerCase();

function generateNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};

function isEven(number) {
    if(number % 2 === 0) {
        return true;
    }
    return false;
}

if 
    (pick === "pari" || pick === "dispari") {
        const playerNumber = parseInt(prompt("Inserire un numero da 1 a 5"));

        if 
            (playerNumber >= 1 && playerNumber <= 5) {
            console.log(`Hai scelto ${pick}`);
            console.log(`Hai scelto il numero ${playerNumber}`);
            const cpuNumber = generateNumber(1,5);
            console.log(`Il numero generato dal computer è ${cpuNumber}`);
            const sum = playerNumber + cpuNumber;
            console.log(`Somma tra i due numeri: ${sum}`);

            if 
                (isEven(sum) === true && pick === "pari" || isEven(sum) === false && pick === "dispari") {
                console.log("Il giocatore ha vinto");          
            }

            else 
                {console.log("Il computer ha vinto")};
        }

        else 
            {alert("Non valido. Devi inserire un numero compreso tra 1 e 5")}}

else 
    {alert("Inserisci un'opzione valida")};