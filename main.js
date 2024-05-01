"use strict";
let users = ["Admin", "Ayesha", "Rafay", "Rashid", "Suleman"];
for (let user of users) {
    if (user === "Admin") {
        console.log("Hello Admin! would you like to see a status report today");
    }
    else {
        console.log(`Hello ${users} Thank you for loging again`);
    }
}
