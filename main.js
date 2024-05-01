"use strict";
let magicians = ["DAVID", "ZACK", "HARRY"];
function copyArray(arr) {
    return [...arr];
}
function great_magician(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
const copiedMagicians = copyArray(magicians);
great_magician(copiedMagicians);
console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nModified Magicians:");
show_magicians(copiedMagicians);
