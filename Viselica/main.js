var words = [
    "программа",
    "макака",
    "прекрасный",
    "оладушек"
];

var pickWord = function () {
    return words[Math.floor(Math.random() * words.length)];
}
var word = pickWord();

var setupAnswerArray = function (word) {
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    return answerArray;
}
var showPlayerProgress = function (answerArray) {
    alert(answerArray.join(" "));
};

var getGuess = function () {
    return prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
};

var updateGameState = function (guess, word, answerArray) {
    var appearances = 0;
    for (var j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            answerArray[j] = guess;
            appearances++;
        }
    }

    return appearances;
};

var showAnswerAndCongratulatePlayer = function (answerArray) {
    showPlayerProgress(answerArray);
    alert("Отлично! Было загадано слово " + answerArray.join(""));
};
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;
var guesses = 20;

while (remainingLetters > 0 && guesses > 0) {
    showPlayerProgress(answerArray);
    var guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Пожалуйста, введите только одну букву.");
    } else {
        guesses--;
        guess = guess.toLowerCase();
        var correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;
    }
}
showAnswerAndCongratulatePlayer(answerArray);
