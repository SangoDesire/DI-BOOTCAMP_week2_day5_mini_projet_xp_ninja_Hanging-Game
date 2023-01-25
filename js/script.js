/**
 * @author ETOUMI Assomou Bertrand Aristide
 * @description DI-Bootcamp Week2 Day5 ExerciceXPNinja Hanging Game
 */

let player1Word = "";
do {
    player1Word = prompt("Joueur 1: Entrez un mot svp (minimum 8 caractères)");
} while (!isNaN(player1Word) || player1Word.length < 8);

let motCache = '';
for (let i = 0; i < player1Word.length; i++) {
    motCache += '*';
}
console.log(player1Word);
console.log("Le mot caché est : " + motCache);

let tentative = 0;
let guesses = '';
let player2Word = "";
let motTrouve = false;

while (tentative <= 10 && motTrouve == false) {
    do {
        player2Word = prompt("Joueur 2: Devinez le mot saisi par Joueur 1 en saisissant lettre par lettre");
    } while (!isNaN(player1Word) || player2Word.length != 1);

    if (!cheickLetter(player2Word, guesses)) {
        guesses += player2Word;
        console.log(guesses);
        for (let i = 0; i < player1Word.length; i++) {
            if (player1Word.charAt(i) == player2Word) {
                motCache.replace(motCache.charAt(i), player2Word);
                console.log("Nouveau mot caché "+motCache);
                break;
            }
        }
        if (motCache.indexOf("*") == -1) {
            motTrouve = true;
        } else {
            tentative++;
        }

        showGuess(guesses);
    }
}

function showGuess(guesses) {
    for (let i = 0; i < guesses.length; i++) {
        console.log("Essai " + i + ": " + guesses[i]);
    }
}

function cheickLetter(letter, guesses, motCache) {
    if (guesses.indexOf(letter) != -1 && motCache.indexOf(letter) != -1) {
        alert("Vous avez déjà saisi cette lettre!");
        return true;
    }

    return false;
}
