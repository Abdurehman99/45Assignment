"use strict";
function Sandwich(items) {
    console.log("Making a sandwich with:");
    items.forEach(item => console.log("- " + item));
    console.log("Enjoy your sandwich!\n");
}
Sandwich(["jam", "Cheese", "tomato slice"]);
Sandwich(["pizza", "Bacon"]);
Sandwich(["Butter", "honey"]);
