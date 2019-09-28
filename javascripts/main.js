import bread from './components/bread.js';
import cheese from './components/cheese.js';
import condiments from './components/condiments.js';
import meats from './components/meats.js';
import veggies from './components/veggies.js';
import order from './components/order.js';

const init = () => {
    bread.bread();
    cheese.cheese();
    condiments.condiments();
    meats.meat();
    veggies.veggies();
    order.printOrderButton();
}

init();