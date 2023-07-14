function createCar(manufacturer, modelName, ): { [key: string]: any } {
    const car = { manufacturer, modelName };
   
    return car;
  }
  
  const car = createCar("Tesla", "Model S");
  console.log(car);