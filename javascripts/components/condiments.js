import utilities from '../helpers/utilities.js';

const condimentsCollection = [
    {
        id: 'condiments1',
        name: 'mayo',
        price: 10,
    },
    {
        id: 'condiments2',
        name: 'mustard',
        price: 30,
    },
    {
        id: 'condiments3',
        name: 'ranch',
        price: 45,
    },
    {
        id: 'condiments4',
        name: 'honey mustard',
        price: 60,
    },
    {
        id: 'condiments5',
        name: 'chipotle ranch',
        price: 100,
    },
]

const getSelectedCondiments = () => {
    const selectedCondiment = [];
    const condimentCheckboxes = document.getElementsByClassName('condiment');
    for (let j=0; j<condimentCheckboxes.length; j++) {
        for (let k=0; k<condimentsCollection.length; k++) {
            if (condimentCheckboxes[j].checked === true && condimentCheckboxes[j].id === condimentsCollection[k].id) {
                selectedCondiment.push(condimentsCollection[k]);
            }
        }
    }

    return selectedCondiment;
}

const condiments = () => {
    let domString = '';
    for (let i=0; i<condimentsCollection.length; i++) {
        domString +=
        `
        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input condiment" id="${condimentsCollection[i].id}">
            <label class="form-check-label" for="${ condimentsCollection[i].id}">${condimentsCollection[i].name}</label>
        </div>
        `;
    }
    utilities.printToDOM('condimentsCounter', domString);
}

export default{ condiments, getSelectedCondiments };