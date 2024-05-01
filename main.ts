class Shirt {
    size: string;
    message: string;
  
    constructor(size: string = "large", message: string = "I love TypeScript") {
        this.size = size;
        this.message = message;
    }
  }
  
  function make_shirt(size: string = "medium", message: string = "I love TypeScript") {
    return new Shirt(size, message);
  }
  

  const largeShirt = make_shirt();
  console.log("Large Shirt:", largeShirt);
  
  const mediumShirt = make_shirt("medium");
  console.log("Medium Shirt:", mediumShirt);
  

  let customShirt = make_shirt("small", "TypeScript is awesome!");
  console.log("Custom Shirt:", customShirt);