var guest_list = ['aazain', 'hadi', 'rafay', 'rashid'];
var not_attending = "rafay";
var new_guest = "sulaiman";
guest_list[2] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("we invite u on dinner tomorrow ".concat(guest_list[i], "\t\n"));
}
console.log("".concat(not_attending, " unfortunately cannot attend tomorrow dinner\n."));
guest_list.unshift('sana', 'saqib', 'shamin');
for (var i = 0; i < guest_list.length; i++) {
    console.log("we invite u on dinner tomorrow because we found a bigger table ".concat(guest_list[i], "\t\n"));
}
console.log("unfortunately we cannot arrange bigger table only two people can come\n");
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("sorry ".concat(remove_guest, "  you are not invited for dinner\n\t"));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log("sir/ms " + guest_list[i] + "\n youre still invited");
}
guest_list.splice(0, 2);
console.log(guest_list);
