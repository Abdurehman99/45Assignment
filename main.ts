function CarInfo(manufacturer: string, modelName: string, ...extras: { [key: string]: any }[]): object {
    let carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extras)
    };
    return carInfo;
}

let car = CarInfo('Toyota', 'Honda', {color: 'black'}, {features: ['navigation', 'sunroof']});
console.log(car);