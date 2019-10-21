//deklarerar spelarna
const player1 = `Player 1's turn 🔴`
const player2 = `Player 2's turn 🔵`
// Räknar antal klick
let clickCounter = 0;

//skapar en metod för varannan klick
function mark(e) {
    // deklarerar det nuvarande klicket till clickedButton
    let clickedButton = e.currentTarget;
    //Om man tryckt på samma knapp, ska inget hända.
    if(clickedButton.innerHTML){
        return;
    }
    // deklarerar en variabel som har ett villkor. 
    //Om den följer villkoret (jämn/udda) ska det bli röd annars blå
    let currentMark = clickCounter % 2 === 0
        ? '🔴'                                     
        : '🔵'

        //currenMark läggs till i clickedButtons inre element.
    clickedButton.innerHTML = currentMark;

    //kallar på funktionen showPlayerOnScreen
    showPlayerOnScreen(currentMark);
}
// skapar funktion för vilken spelares tur det är
function showPlayerOnScreen(currentMark){    
    // hämtar id:t från en p-tagg
    let p = document.getElementById('turnId')
    // skapar villkor. Kollar om currentMark inte är det samma som röd symbol.
    if(currentMark !== '🔴'){
        // player1 läggs till i p taggens inre element.
        p.innerHTML= player1;   
        //ökar i värdet med 1 varje gång.   
        clickCounter++;         
    }
    // om inte if:ens villkor är sann, kommer else köras.
    else {
        // player2 läggs till i p taggens inre element.
        p.innerHTML= player2;
         //ökar i värdet med 1 varje gång.   
        clickCounter++;
    }
    //kallar på funktionen countClicks
    countClicks(clickCounter);
}
// skapar funktion userChoice
function userChoice(){
    // Ber användaren skriva in ett värde som man sen sparar i en variabel. 
    const answer = prompt('Choose amount of squares for your game. Max 30')
    // kollar om svaret följer villkoret. mindre än 30
    if(answer <=30){
        //returnerar svar
        return answer
    //om inte villkoret blir san kommar else köras.    
    }else {
        //skriver ut en alert på sidan
        alert('To big amount')    
        // kallar på funktionen createTable för att köra om programet
        createTable()
    }
    
}

// Skapar en funktion för att skapa spelbrädet
function createTable() {
    //  Hämtar antal rutor från funktionen userChoise funktionen
    let amountOfSquares = userChoice(); 
    // hämtar id från div taggen för att kunna adda till element/taggar senare
    let myTableDiv = document.getElementById("myDynamicTable");
    // skapar ett table-tagg och deklarerar den till "table"
    let table = document.createElement('TABLE');
    

    // skapar ett tbody-element och deklarerar till "tableBody"
    let tableBody = document.createElement('TBODY');
    //lägger till tableBody taggen/elementet i table taggen så den blir dess child
    table.appendChild(tableBody);

    // loopar igenom antalet columner som angetts
    for (let i = 0; i < amountOfSquares; i++) {     // antal columner  
        //skapar ett element 'TR' och deklarerar den till tr  
        let tr = document.createElement('TR');       
        //lägger till tr elementet till tablebody  
        tableBody.appendChild(tr);

         
        // loopar igenom antalet rader som angetts
        for (let j = 0; j < amountOfSquares; j++) {       // antalet rader
            // skapar ett element och deklarerar till td
            let td = document.createElement('TD');
            // skapar ett td-element och deklarerar till btn-element
            let btn = document.createElement("BUTTON");
            btn.id = i * amountOfSquares + j                        // alla knappar får ett id
            // skapar en click-funktion
            btn.addEventListener('click', function (e) {
                // kallar på metoden mark
                mark(e);

            })
            // lägger till td i tr-taggen
            tr.appendChild(td);
            // lägger till btn i td-taggen
            td.appendChild(btn);

        }
    }
    myTableDiv.appendChild(table);
}

// skapar en funktion som räknar antal klick
function countClicks(clickCount){
  let p = document.getElementById('markId');
  p.innerHTML= clickCount; 

}
//kallar på funktionen
createTable();