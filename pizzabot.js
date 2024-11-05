const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`);

let orderName = prompt("Enter the name of the pizza you want to order today");

while (!checkOrderName(orderName)) {
    orderName = prompt("Invalid order name, try again!");
}

let orderQuantity = prompt(`How many of ${orderName} do you want?`);
while (!orderQuantity || orderQuantity === "0") {
    orderQuantity = prompt("Please enter the number of pizzas you want!");
}
const orderTotal = totalCost(orderQuantity);
alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take ${cookingTime(orderQuantity)} minutes.`);

function checkOrderName(orderName) {
    if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni) {
        return true;
    } else {
        return false;
    }
}

function totalCost(orderQuantity) {
    return orderQuantity * pizzaPrice;
}

function cookingTime(orderQuantity) {
    if (orderQuantity <= 2) {
        return 10;
    } else if (orderQuantity < 6) {
        return 15;
    } else {
        return 20;
    }
}

