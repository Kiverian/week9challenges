
// create a function that is going to hold our pizza in our room
function cutPizzaSlices(pizzaSize) {
    // hold the state of pizza = 8
    var pizza = pizzaSize;
    // this has access to things inside of cutPizzaSlices
    function cutPizza(people) {
        // so we can cut our pizza first, then we can divide between the people
        var dividing = pizza / people;
        // return "Each person gets " + dividing + " slices of pizza."
        return `Each person gets ${dividing} slices of pizza`
    }
    //whenever we are ready to share the pizza, we can
return cutPizza;
}
var pizzaSize = cutPizzaSlices(8);
var sharePizza = pizzaSize(2)
console.log(sharePizza)
var sharePizza = pizzaSize(3)
console.log(sharePizza)
