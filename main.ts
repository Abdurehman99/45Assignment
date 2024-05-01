let magicians: string[] = ["DAVID", "ZACK", "HARRY",];

function great_magician(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

great_magician(magicians);
show_magicians(magicians);