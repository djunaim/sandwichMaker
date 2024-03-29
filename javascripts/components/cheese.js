import utilities from '../helpers/utilities.js';

const cheeseCollection = [
    {
        id: 'cheese1',
        name: 'cheddar',
        price: 50,
    },
    {
        id: 'cheese2',
        name: 'provolone',
        price: 30,
    },
    {
        id: 'cheese3',
        name: 'mozzarella',
        price: 45,
    },
    {
        id: 'cheese4',
        name: 'swiss',
        price: 60,
    },
]

const getSelectedCheeses = () => {
    const selectedCheese = [];
    const cheeseCheckboxes = document.getElementsByClassName('cheese');
    for (let j=0; j<cheeseCheckboxes.length; j++) {
        for (let k=0; k<cheeseCollection.length; k++) {
            if (cheeseCheckboxes[j].checked === true && cheeseCheckboxes[j].id === cheeseCollection[k].id) {
                selectedCheese.push(cheeseCollection[k]);
            }
        }
    }

    return selectedCheese;
}

const cheese = () => {
    let domString = '';
    for (let i=0; i<cheeseCollection.length; i++) {
        domString +=
        `
        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input cheese" id="${cheeseCollection[i].id}">
            <label class="form-check-label" for="${ cheeseCollection[i].id}">${cheeseCollection[i].name}</label>
        </div>
        `;
    }
    utilities.printToDOM('cheeseCounter', domString);
}

export default{ cheese, getSelectedCheeses };