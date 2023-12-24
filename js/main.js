let containerSlider = document.querySelector('.container__slider-main')
let slider = document.querySelector('.slider-main')

let sliderItem = document.querySelector('.slider-main__item')
let sliderButtonLeft = document.querySelector('.slider-main__button--left')
let sliderButtonRight = document.querySelector('.slider-main__button--right')

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
        // console.log(entry.target)
        // if (entry.isIntersecting) observer.unobserve(entry.target)
    },
        options
    )
});

sliderItems.forEach(slide => {
    observer.observe(slide)
})