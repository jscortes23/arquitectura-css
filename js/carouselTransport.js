const sliderTransport = document.querySelectorAll('.slider-transport')

sliderTransport.forEach( (slider) => {
    slider.scrollLeft = slider.offsetWidth
    let slidersTransport = [...slider.children]
    let lastSliderTransport = slidersTransport.at(-1).cloneNode(true)

    slider.insertAdjacentElement("afterbegin", lastSliderTransport)
})

const containerSliderTransport = document.querySelectorAll('.container__slider-transport')

containerSliderTransport.forEach( (containerSlider) => {
    let btnLeft = containerSlider.firstElementChild
    let btnRight = containerSlider.lastElementChild
    btnLeft.addEventListener('click', () => {
        moveLeft(containerSlider.children[1])
    })
    btnRight.addEventListener('click', () => {
        moveRight(containerSlider.children[1])
    })
})

function moveLeft(slider) {
    slider.scrollLeft -= slider.offsetWidth
}
function moveRight(slider) {
    slider.scrollLeft += slider.offsetWidth
}

