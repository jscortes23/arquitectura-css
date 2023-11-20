let containerSlider = document.querySelector('.container__slider')
let slider = document.querySelector('.slider')
let sliderButtons = document.querySelector('.slider__buttons')
let sliderItem = document.querySelector('.slider__item')
let sliderButtonLeft = document.querySelector('.slider__button--left')
let sliderButtonRight = document.querySelector('.slider__button--right')

sliderButtonLeft.addEventListener('click', () => {
    slider.scrollTop -= sliderItem.clientHeight;
})

sliderButtonRight.addEventListener('click', () => {
    slider.scrollTop += sliderItem.clientHeight;
})

/* Using intersectionObserver */

let sliderItems = document.querySelectorAll('.slider__item')

let options = {
    threshold: 1,
}
/* Create observer */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("active", entry.isIntersecting)
        entry.target.setAttribute("style", "background-color: red")
        console.log(entry.target)
        // if (entry.isIntersecting) observer.unobserve(entry.target)
    },
    options
)
    console.log(entries)
});

sliderItems.forEach(slide => {
    observer.observe(slide)
})