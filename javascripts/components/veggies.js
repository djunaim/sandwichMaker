import utilities from '../helpers/utilities.js';

const veggiesCollection = [
    {
        id: 'veggies1',
        name: 'tomatoes',
        price: 200,
    },
    {
        id: 'veggies2',
        name: 'lettuce',
        price: 300,
    },
    {
        id: 'veggies3',
        name: 'spinach',
        price: 45,
    },
    {
        id: 'veggies4',
        name: 'sprouts',
        price: 600,
    },
    {
        id: 'veggies5',
        name: 'pickles',
        price: 10,
    },
    {
        id: 'veggies6',
        name: 'onions',
        price: 58,
    },
    {
        id: 'veggies7',
        name: 'jalapenos',
        price: 100,
    },
]

const getSelectedVeggies = () => {
    const selectedVeggies = [];
    const veggieCheckboxes = document.getElementsByClassName('veggies');
    for (let j=0; j<veggieCheckboxes.length; j++) {
        for (let k=0; k<veggiesCollection.length; k++) {
            if (veggieCheckboxes[j].checked === true && veggieCheckboxes[j].id === veggiesCollection[k].id) {
                selectedVeggies.push(veggiesCollection[k]);
            }
        }
    }

    return selectedVeggies;
}

const veggies = () => {
    let domString = '';
    for (let i=0; i<veggiesCollection.length; i++) {
        domString +=
        `
        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input veggies" id="${veggiesCollection[i].id}">
            <label class="form-check-label" for="${ veggiesCollection[i].id}">${veggiesCollection[i].name}</label>
        </div>
        `;
    }
    utilities.printToDOM('veggiesCounter', domString);
}

export default{ veggies, getSelectedVeggies };