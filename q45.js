function createCar(manufacturer, modelName) {
    var car = { manufacturer: manufacturer, modelName: modelName };
    return car;
}
var car = createCar("Tesla", "Model S");
console.log(car);
