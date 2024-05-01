let guest_list : string [] = ['aazain','hadi','rafay','rashid'];

// for(let i=0; i<guest_list.length; i++){

// console.log(`we invite u on dinner tomorrow ${guest_list[i]}\t\n`)
// }

let not_attending : string = "rafay";
let new_guest : string = "sulaiman";
guest_list[2] = new_guest

for(let i=0; i<guest_list.length; i++){

    console.log(`we invite u on dinner tomorrow ${guest_list[i]}\t\n`)
    }

    console.log(`${not_attending} unfortunately cannot attend tomorrow dinner.`)

    guest_list.unshift('sana','saqib','shamin');

    for(let i=0; i<guest_list.length; i++){
console.log(`we invite u on dinner tomorrow because we found a bigger table ${guest_list[i]}\t\n`)
    }