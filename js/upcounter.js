/*
* Pagina fuente del archivo countUp.min.js
* http://bavet.jabarprov.go.id/assets/libs/countup.js/#:~:text=7-,CountUp.,js%20
*/
import { CountUp } from './countUp.min.js'

let containerCountUp = document.querySelector('.content__count-up')
let countPerson = document.querySelector('[data-count="persons"]')
let countEntriprise = document.querySelector('[data-count="enterprises"]')
let countVehicles = document.querySelector('[data-count="vehicles"]')

const options = {
  duration: 1.5,
  separator: '',
  prefix: '+',
}

let countP = new CountUp(countPerson, countPerson.dataset.limitCount, options)
let countE = new CountUp(countEntriprise, countEntriprise.dataset.limitCount, options)
let countV = new CountUp(countVehicles, countVehicles.dataset.limitCount, options)

let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (!countP.error) {
        countP.start()
        countE.start()
        countV.start()
      } else {
        console.error(countP.error)
      }
    }
  })
}, {
  root: null,
  treshold: 1.0,
  rootMargin: "-50px"
})

observer.observe(containerCountUp)

