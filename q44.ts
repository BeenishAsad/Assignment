// Sandwiches: Write a function that accepts an array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call 
// provides, and it should print a summary of the sandwich that is being ordered. Call the 
// function three times, using a different number of arguments each time.

function makeSandwich(items: string[]): void {
    const summary = `Your sandwich will have the following items:`;
    for (let i = 0; i < items.length; i++) {
      summary == ` ${items[i]}`;
    }
    console.log(summary);
  }
  
  makeSandwich(["ham", "cheese", "lettuce", "tomato"]);
  makeSandwich(["turkey", "bacon", "avocado"]);
  makeSandwich(["roast beef", "cucumber", "onion"]);

  export{};