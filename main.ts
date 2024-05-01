let car : string = "Subaru"
let age : number = 25
let number : number [] = [1,2,3,4,5]

console.log("is car == 'Subaru?' i prdict true")
console.log(car == "Subaru") // True case-sensitive


console.log("is car == 'Subaru?' i prdict false")
console.log(car == "subaru") // False case-sensitive


console.log("is car != 'Toyota'? i prdict true")
console.log(car != "Toyota") // True 

console.log("is car !== 'subaru'? i prdict false")
console.log(car !== "subaru") // False case-sensitive

console.log("is car.tolowercase() == 'subaru'? i predict true") 
console.log(car.toLowerCase() =='subaru')// True convert to lower case

console.log("is car.tolowercase() === 'subaru'? i predict false") 
console.log(car.toLowerCase() )// False Original value

console.log("Is age == 25? I predict true")
console.log( age == 25) // True 

console.log("Is age != 25? I predict true")
console.log( age != 25) // True 

console.log("Is age == 25? I predict true")
console.log( age == 25) // True 

console.log("Is age > 30? I predict false")
console.log(age > 30) // Flase

console.log("Is age <= 25? I predict true")
console.log( age <= 25) // True

console.log("Is age > 30 || age < 18 I predict false")
console.log( age > 30 || age < 18) // False 

console.log("Is 3 in numbers? i predict true")
console.log(3 in number) //True

console.log("Is 5 not in numbers? i predict false")
console.log(5 !in number) //False