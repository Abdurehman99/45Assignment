"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ["DAVID", "ZACK", "HARRY",];
function great_magician(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
great_magician(magicians);
show_magicians(magicians);
