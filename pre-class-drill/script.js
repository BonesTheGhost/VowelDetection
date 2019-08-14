/*Setting up the array for the computer choices and testing to make sure it works properly*/
//Javascript href link test
console.log("I'm working!");

// ***** VARIABLES *****

//vowels for checking against.
var vowelChoices = ["a", "e", "i", "o", "u"];

//allowed keys
var allowedInputs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " ", "/"]

//null variable initialized to hold the players input.
var playerKeyChoice = "";

//variable for holding vowel check result.
var keyTest = false;

//variable for checking for unwanted keys.
var modsTest = false;

//score holders for the counter areas.
var vowelCount = 0;
var consCount = 0;

//control for printing the new word (after space entered) is printed correctly
var wordCycleCounter = 0;

// to prevent the entire keyCounter array from being added every time.
var arrayControl = 0;

//space for formatting concantination
var spaceHolder = " ";

//variable for if this word contains a vowel
var vowelTrue = 0;

//cheat key needs a space for the formatting in the program
var cheatKey = "/help ";

var cheatCode = " ";

//arrays for holding keys entered and words saved.
var keyCounter = [""];
var wordHolder = [""];


function initializeScore() {
    document.getElementById("vowelSpace").innerHTML = vowelCount;
    document.getElementById("consSpace").innerHTML = consCount;
}

function checkPlayerKey() {
    keyTest = vowelChoices.includes(playerKeyChoice);
    console.log("Contains Vowel: ", keyTest);
}

function checkForMods() {
    modsTest = allowedInputs.includes(playerKeyChoice);
    console.log("Contains allowed key: ", modsTest);
}

function generateCheat() {


    console.log("Cheat code generated")

    //random number from 1 to 5
    codeRandomizer = Math.floor((Math.random() * 16) + 1);

    console.log("Random number generated: ", codeRandomizer);

    if (codeRandomizer === 1) {
        cheatCode = "there is no cow level :: Instant Win";
    }
    else if (codeRandomizer === 2) {
        cheatCode = "show me the money :: 10,000 Minerals and Vespene Gas";
    }
    else if (codeRandomizer === 3) {
        cheatCode = "whats mine is mine :: 500 Crystals";
    }
    else if (codeRandomizer === 4) {
        cheatCode = "breathe deep :: 500 Vespene Gas";
    }
    else if (codeRandomizer === 5) {
        cheatCode = "medieval man :: All Research Abilities";
    }
    else if (codeRandomizer === 6) {
        cheatCode = "modify the phase variance :: Build Anything";
    }
    else if (codeRandomizer === 7) {
        cheatCode = "staying alive :: Continue playing after Win";
    }
    else if (codeRandomizer === 8) {
        cheatCode = "ophelia :: Enable Mission Select";
    }
    else if (codeRandomizer === 9) {
        cheatCode = "noglues :: Enemy can;t use Psionic Storm";
    }
    else if (codeRandomizer === 10) {
        cheatCode = "operation cwal :: Faster building (also effects A.I. players building so be careful)";
    }
    else if (codeRandomizer === 11) {
        cheatCode = "the gathering :: Free Unit Spells/Abilities";
    }
    else if (codeRandomizer === 12) {
        cheatCode = "something for nothing :: Free Upgrades";
    }
    else if (codeRandomizer === 13) {
        cheatCode = "game over man :: Instant Loss";
    }
    else if (codeRandomizer === 14) {
        cheatCode = "power overwhelming :: Invincible Units";
    }
    else if (codeRandomizer === 15) {
        cheatCode = "war aint what it used to be :: No fog of war";
    }
    else if (codeRandomizer === 16) {
        cheatCode = "food for thought :: No supply Limit";
    }

    //write to cheat to necessary space
    document.getElementById("cheatCode").innerHTML = cheatCode;
}

initializeScore();

document.onkeyup = function logKey() {
    playerKeyChoice = event.key.toLowerCase();
    console.log(playerKeyChoice);
    //ORIGINAL OUTPUT
    //document.getElementById("outputArea").innerHTML += playerKeyChoice;

    //add the players key to the key array.
    keyCounter.push(playerKeyChoice);

    //outputting the array to make sure the right keys get entered into the array.
    console.log(keyCounter);

    checkPlayerKey();
    checkForMods();

    //Check for illegal inputs.
    if (modsTest == false) {
        alert("Please enter 'a-z' or press the space bar");

        //Add a space to the end of the playerKeyChoice for formatting.
        //playerKeyChoice += spaceHolder;

        //print illegal inputs in the illegal area.
        document.getElementById("illegalKeys").innerHTML += playerKeyChoice;

        //add a space in the output space
        document.getElementById("illegalKeys").innerHTML += " ";

        //remove the illegal input from the keyCounter Array
        reset = keyCounter.length - 1;
        keyCounter[reset] = "";

    }
    //If not illegal, run normal procedures.
    else {

        //if not an illegal key, print output to input log.
        document.getElementById("outputArea").innerHTML += playerKeyChoice;

        //updating the "counter" areas.
        if (keyTest === true) {
            vowelCount += 1;
            document.getElementById("vowelSpace").innerHTML = vowelCount;
            console.log("Vowel DETECTED!: Adding 1 to vowels.");

            //change vowelTrue to true to print vowel word in correct space.
            vowelTrue = true;
        }
        else {
            consCount += 1;
            document.getElementById("consSpace").innerHTML = consCount;
            console.log("Consonant: Adding 1 to consonants.");
        }

        /*Every time a space is detected, grab all of the characters from the key 
        array and make them into a word. Take that word and move it to the word array to print.
        */
        if (playerKeyChoice === " ") {

            //make the word assembler variable for concantinating the chars into words.
            var wordAssembler = "";

            //for referencing the first word in the word array, then the second, and so on...
            wordCycleCounter += 1;

            //for i < every character entered so far (offset by +1 to avoid printing the null)
            for (i = arrayControl; i < keyCounter.length; i++) {
                wordAssembler += keyCounter[i];
                console.log(wordAssembler);

                arrayControl = keyCounter.length;
                console.log("New lower bound: ", arrayControl);


            }

            wordHolder.push(wordAssembler);
            console.log(wordHolder);

            console.log("Latest Word: ", wordHolder[wordCycleCounter])


            /*
            if (wordAssembler === cheatKey) {
                vowelTrue = 3;
            }
            */

            //Controlling where the words print.
            if (vowelTrue == 1) {
                console.log("wordAssembler: ", wordAssembler);
                if (wordAssembler === cheatKey) {
                    generateCheat();

                    document.getElementById("cheatCode").innerHTML += " ";
                    //reset vowelTrue to 'false' or 0
                    vowelTrue = 0;
                    console.log("CHEATCODE LOGGED :: vowelTrue set to 0 to allow for retry: ", vowelTrue);
                }
                else {
                    console.log("pushing word to vowel log");
                    document.getElementById("wordsArea").innerHTML += wordHolder[wordCycleCounter];

                    //reset the vowelTrue condition
                    vowelTrue = 0;
                    console.log("VOWEL WORD LOGGED :: vowelTrue set to 0 to allow for retry: ", vowelTrue);
                }
            }
            else if (vowelTrue == 0) {
                console.log("pushing word to reject log");
                document.getElementById("rejectArea").innerHTML += wordHolder[wordCycleCounter];

                console.log("NON-VOWEL WORD LOGGED ::vowelTrue set to 0 to allow for retry: ", vowelTrue);
            }

        }
    }

}
