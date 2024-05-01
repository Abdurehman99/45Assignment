let Person_Name :string ="fahad"

console.log("Lower Case", Person_Name.toLowerCase())

console.log("Upper Case",Person_Name.toUpperCase())

console.log("Title Case",Person_Name.replace(/\b\w/g,c=> c.toUpperCase()))
