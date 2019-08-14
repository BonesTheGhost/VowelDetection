/*Setting up the array for the computer choices and testing to make sure it works properly*/
//Javascript href link test
console.log("I'm working!");

// ***** VARIABLES *****

//vowels for checking against.
var vowelChoices = ["a", "e", "i", "o", "u"];

//null variable initialized to hold the players input.
var playerKeyChoice = "";

//variable for holding vowel check result.
var keyTest = false;

//score holders for the counter areas.
var vowelCount = 0;
var consCount = 0;

//control for printing the new word (after space entered) is printed correctly
var wordCycleCounter = 0;

// to prevent the entire keyCounter array from being added every time.
var arrayControl = 1;

//arrays for holding keys entered and words saved.
var keyCounter = [""];
var wordHolder = [""];


function initializeScore() {
    document.getElementById("vowelSpace").innerHTML = vowelCount;
    document.getElementById("consSpace").innerHTML = consCount;
}

function checkPlayerKey() {
    keyTest = vowelChoices.includes(playerKeyChoice);
    console.log(keyTest);
}

initializeScore();

document.onkeyup = function logKey() {
    playerKeyChoice = event.key.toLowerCase();
    console.log(playerKeyChoice);
    document.getElementById("outputArea").innerHTML += playerKeyChoice;

    //add the players key to the key array.
    keyCounter.push(playerKeyChoice);

    //keep counting up for every key pressed.
    arrayControl += 1;

    //outputting the array to make sure the right keys get entered into the array.
    console.log(keyCounter);

    checkPlayerKey();

    //updating the "counter" areas.
    if (keyTest === true){
        vowelCount += 1;
        document.getElementById("vowelSpace").innerHTML = vowelCount;
        console.log("Vowel DETECTED!: Adding 1 to vowels.");
    }
    else {
        consCount += 1;
        document.getElementById("consSpace").innerHTML = consCount;
        console.log("Consonant: Adding 1 to consonants.");
    }

    /*Every time a space is detected, grab all of the characters from the key 
    array and make them into a word. Take that word and 
    */
    if (playerKeyChoice === " ") {

        var wordAssembler = "";
        wordCycleCounter += 1;

        for (i=arrayControl; i<keyCounter.length; i++){
            wordAssembler += keyCounter[i];
            console.log("wordAssembler");

        }

        wordHolder.push(wordAssembler);
        console.log(wordHolder);

        document.getElementById("wordsArea").innerHTML +=  wordHolder[wordCycleCounter];
    }


}
