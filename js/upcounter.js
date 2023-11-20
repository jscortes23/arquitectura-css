import { CountUp } from './countUp.min.js';

let countPerson = document.querySelector('[data-count="persons"]')
let countEntriprise = document.querySelector('[data-count="enterprises"]')
let countVehicles = document.querySelector('[data-count="vehicles"]')

const options = {
    separator: '',
    prefix: '+ ',
};

let countP = new CountUp(countPerson, countPerson.dataset.limitCount, options);
let countE = new CountUp(countEntriprise, countEntriprise.dataset.limitCount, options);
let countV = new CountUp(countVehicles, countVehicles.dataset.limitCount, options);

if (!countP.error) {
    countP.start();
    countE.start();
    countV.start();
} else {
    console.error(countP.error);
}
