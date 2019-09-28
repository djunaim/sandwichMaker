import bread from './bread.js';
import cheese from './cheese.js';
import condiments from './condiments.js';
import meats from './meats.js';
import veggies from './veggies.js';
import utilities from '../helpers/utilities.js';

const reducer = (accumulator, currentValue) => {
    return accumulator + currentValue;
}

const createFinalOrder = (items) => {
    let domString2 = '';
    let prices = [];
    for (let i=0; i<items.length; i++) {
        prices.push(items[i].price);
        domString2 += `
        <div class="container toppings">
            <div class="row">
                <div class="col d-flex justify-content-start">
                    <p>${items[i].name}</p>
                </div>
                <div class="col d-flex justify-content-end">
                    <p>$${((items[i].price)/100).toFixed(2)}</p>
                </div>
            </div>
        </div>
        `    
    }
    // the reduce method is what gives the value. Prices is still an array
    let totalPrice = prices.reduce(reducer);
    // can perform math on totalPrice because it is a value now
    let formatPrice = (totalPrice/100).toFixed(2);
    utilities.printToDOM('totPrice', `<h3>Total Price: $${formatPrice}</h3>`);
    utilities.printToDOM('finalOrder', domString2);
}

const createOrderEvent = () => {
    let selectedToppings = '';
    
    const selectedBread = bread.getSelectedBread();  
    const selectedMeats = meats.getSelectedMeats();   
    const selectedCheese = cheese.getSelectedCheeses();  
    const selectedCondiment = condiments.getSelectedCondiments();   
    const selectedVeggies = veggies.getSelectedVeggies();

    selectedToppings = selectedBread.concat(selectedMeats, selectedCheese, selectedCondiment, selectedVeggies);

    createFinalOrder(selectedToppings);
    
}

const printOrderButton = () => {
    const domString = '<button id="orderButton" class="btn btn-primary">Make Sandwich</button>';
    utilities.printToDOM('order', domString);
    document.getElementById('orderButton').addEventListener('click', createOrderEvent);
}

export default{ printOrderButton };