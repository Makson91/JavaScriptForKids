// var menBodyParts = ["нога", "рука", "жопа", "голова"];
// var adjectives = ["кривая", "длинная", "красивая", "большая"];
// var animalBodyParts = ["нога", "рука", "жопа", "голова"];
// var animal = ["гуся", "собаки", "слона", "коровы"];

// var menBodyPart = menBodyParts[Math.floor(Math.random() * 4)];
// var adjective = adjectives[Math.floor(Math.random() * 4)];
// var animalBodyPart = animalBodyParts[Math.floor(Math.random() * 4)];
// var takeAnimal = animal[Math.floor(Math.random() * 4)];

// var randomInsult = "У тебя " + menBodyPart + " еще более " + adjective + ", чем " + animalBodyPart + " у " + takeAnimal;
// var randomInsultJoin = ["У тебя", menBodyPart, "еще более", adjective, "чем", animalBodyPart, "у", takeAnimal].join(" ");

// document.write(randomInsult, "<br>");
// document.write(randomInsultJoin, "<br>");

//-------------------------------------------------------------//

// var menBodyParts = ["нога", "рука", "жопа", "голова"];
// var adjectives = ["кривая", "длинная", "красивая", "большая"];
// var animalBodyParts = ["нога", "рука", "жопа", "голова"];
// var animal = ["гуся", "собаки", "слона", "коровы"];

// var pickRandomword = function (words) {
//     return words[Math.floor(Math.random() * words.length)];
// }
// var randomInsult = "У тебя " + pickRandomword(menBodyParts) + " еще более " + pickRandomword(adjectives) + ", чем " + pickRandomword(animalBodyParts) + " у " + pickRandomword(animal);
// document.write(randomInsult, "<br>");

//-------------------------------------------------------------//

// var pickRandomword = function (words) {
//     return words[Math.floor(Math.random() * words.length)];
// };
// var generateRandomInsult = function () {
//     var menBodyParts = ["нога", "рука", "жопа", "голова"];
//     var adjectives = ["кривая", "длинная", "красивая", "большая"];
//     var animalBodyParts = ["нога", "рука", "жопа", "голова"];
//     var animal = ["гуся", "собаки", "слона", "коровы"];

//     var randomInsult = "У тебя " + pickRandomword(menBodyParts) + " еще более " + pickRandomword(adjectives) + ", чем " + pickRandomword(animalBodyParts) + " у " + pickRandomword(animal);

// return randomInsult;
// };
// document.write(generateRandomInsult());

//------------------------------------------------------------//

// var multiply = function (a, b) {
//     return a * b;
// }

// var umnoz = multiply(36325, 9824);
// console.log(umnoz)
// var add = function (a, b) {
//     return a + b;
// };
// var sum = add(umnoz, 777);
// console.log(sum);

//------------------------------------------------------------//

var areArraysSame = function (array1, array2) {
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i] || array1.length !== array2.length) {
            return false;
        }
    }
    return true;
}
console.log(areArraysSame([1, 2, 3], [1, 2, 5])); 
console.log(areArraysSame([1, 2, 3], [3, 2, 4]));  
console.log(areArraysSame([1, 2, 3], [4, 5, 6])); 
console.log(areArraysSame([1, 2, 3], [1, 2, 3])); 