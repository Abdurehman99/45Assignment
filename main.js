"use strict";
let current_users = ["raza", "admin", "shahid", "shoaib", "talha"];
let new_users = ["User2", "User6", "User7", "admin", "User9"];
new_users.forEach((newUser) => {
    if (current_users.some((current_users => current_users.toLowerCase() === newUser.toLowerCase()))) {
        console.log(`${newUser} will need to enter a new username`);
    }
    else {
        console.log(`${newUser} is avaliable`);
    }
});
