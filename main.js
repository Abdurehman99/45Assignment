"use strict";
function storeCarInfo(manufacturer, modelName, ...extras) {
    let carInfo = {
        manufacturer,
        modelName,
    };
    return carInfo;
}
let car = storeCarInfo('Toyota', 'Honda', { color: 'black' }, { features: ['navigation', 'sunroof'] });
console.log(car);
