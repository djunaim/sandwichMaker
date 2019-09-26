import bread from './bread.js';
// import cheese from './cheese.js';
// import condiments from './condiments.js';
// import meats from './meats.js';
// import veggies from './veggies.js';
import utilities from '../helpers/utilities.js';

// const createFinalOrder = (items) => {
//     let domString2 = '';
//     for (let i=0; i<items.length; i++) {
//         domString2 += `
//         <h2>${items[i].name}</h2>
//         `
//     }
//     utilities.printToDOM('finalOrder', domString2);
// }

const createOrderEvent = () => {
    const selectedBread = bread.getSelectedBread();
    // const selectedMeats = meat.getSelectedMeats();
    // createFinalOrder(selectedBread);
    utilities.printToDOM('finalOrder', selectedBread);
}

const printOrderButton = () => {
    const domString = '<button id="orderButton" class="btn btn-primary">Make Sandwich</button>';
    utilities.printToDOM('finalOrder', domString);
    document.getElementById('orderButton').addEventListener('click', createOrderEvent);
}

export default{ printOrderButton };