import utilities from '../helpers/utilities.js';

const meatCollection = [
    {
        id: 'meat1',
        name: 'turkey',
        price: 100,
    },
    {
        id: 'meat2',
        name: 'ham',
        price: 400,
    },
    {
        id: 'meat3',
        name: 'chicken',
        price: 300,
    },
    {
        id: 'meat4',
        name: 'steak',
        price: 500,
    },
]

const meat = () => {
    let domString = '';
    for (let i=0; i<meatCollection.length; i++) {
        domString +=
        `
        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input meat" id="${meatCollection[i].id}">
            <label class="form-check-label" for="${ meatCollection[i].id}">${meatCollection[i].name}</label>
        </div>
        `;
    }
    utilities.printToDOM('meatCounter', domString);
}

export default{ meat };