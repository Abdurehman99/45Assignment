let guest_list : string [] = ['aazain','hadi','rafay','rashid'];
let not_attending : string = "rafay";
let new_guest : string = "sulaiman";
guest_list[2] = new_guest

for(let i=0; i<guest_list.length; i++){

    console.log(`we invite u on dinner tomorrow ${guest_list[i]}\t\n`)
    }

    console.log(`${not_attending} unfortunately cannot attend tomorrow dinner\n.`)

    guest_list.unshift('sana','saqib','shamin');

    for(let i=0; i<guest_list.length; i++){
console.log(`we invite u on dinner tomorrow because we found a bigger table ${guest_list[i]}\t\n`)
    }

    console.log("unfortunately we cannot arrange bigger table only two people can come\n")
    while(guest_list.length>2){
        let remove_guest = guest_list.pop();
        console.log(`sorry ${remove_guest}  you are not invited for dinner\n\t`);
    }
    for(let i=0; i<guest_list.length; i++){

console.log(`sir/ms ` + guest_list[i] + "\n youre still invited")

    }


    guest_list.splice(0,2)
    console.log(guest_list)