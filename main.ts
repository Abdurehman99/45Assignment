let magicians = ["DAVID", "ZACK", "HARRY"];


function copyArray(arr: string[]): string[] {
    return [...arr];
}


function great_magician(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}


function show_magicians(magicians: string[]) {
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