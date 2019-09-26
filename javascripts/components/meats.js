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

const getSelectedMeats = () => {
    const selectedMeat = [];
    const meatCheckboxes = document.getElementsByClassName('meat');
    for (let j=0; j<meatCheckboxes.length; j++) {
        for (let k=0; k<meatCollection.length; k++) {
            if (meatCheckboxes[j].checked === true && meatCheckboxes[j].id === meatCollection[k].id) {
                selectedMeat.push(meatCollection[k]);
            }
        }
    }

    return selectedMeat;
}

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

export default{ meat, getSelectedMeats };