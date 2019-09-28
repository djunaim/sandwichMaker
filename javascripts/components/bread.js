import utilities from '../helpers/utilities.js';

const breadCollection = [
    {
        id: 'bread1',
        name: 'italian',
        price: 300,
    },
    {
        id: 'bread2',
        name: 'wheat',
        price: 400,
    },
    {
        id: 'bread3',
        name: 'sourdough',
        price: 300,
    },
]

const getSelectedBread = () => {
    const selectedBread = [];
    console.log(selectedBread);
    const breadCheckboxes = document.getElementsByClassName('bread');
    for (let j=0; j<breadCheckboxes.length; j++) {
        for (let k=0; k<breadCollection.length; k++) {
            if (breadCheckboxes[j].checked === true && breadCheckboxes[j].id === breadCollection[k].id) {
                selectedBread.push(breadCollection[k]);
            }
        }
    }

    return selectedBread;
}

const bread = () => {
    let domString = '';
    for (let i=0; i<breadCollection.length; i++) {
        domString +=
        `
        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input bread" id="${breadCollection[i].id}">
            <label class="form-check-label" for="${breadCollection[i].id}">${breadCollection[i].name}</label>
        </div>
        `;
    }
    utilities.printToDOM('breadCounter', domString);
}

export default{ bread, getSelectedBread };