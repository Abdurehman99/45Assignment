interface item {

    name:string
    price:number
}

let book : item ={

    name:'ESSENTIAL TYPESCRIPT'
    price:450

}

let apple: item ={

name:'apple'
price:200

}
console.log(`book name ${book.name}, price: ${book.price}`)

console.log(`book name ${apple.name}, price: ${apple.price}`)