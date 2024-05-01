var guest_list = ['aazain', 'hadi', 'rafay', 'rashid'];
// for(let i=0; i<guest_list.length; i++){
// console.log(`we invite u on dinner tomorrow ${guest_list[i]}\t\n`)
// }
var not_attending = "rafay";
var new_guest = "sulaiman";
guest_list[2] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("we invite u on dinner tomorrow ".concat(guest_list[i], "\t\n"));
}
console.log("".concat(not_attending, " unfortunately cannot attend tomorrow dinner."));
guest_list.unshift('sana', 'saqib', 'shamin');
for (var i = 0; i < guest_list.length; i++) {
    console.log("we invite u on dinner tomorrow because we found a bigger table ".concat(guest_list[i], "\t\n"));
}
