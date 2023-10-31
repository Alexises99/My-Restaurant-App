const slides = document.querySelectorAll('.slide')! as NodeListOf<HTMLElement>

let currentSlide: number = 0

let maxSlides = slides.length - 1

const nextSlide = document.querySelector('.btn-next') as HTMLElement
const prevSlide = document.querySelector('.btn-prev') as HTMLElement

nextSlide.addEventListener('click', function () {
  if (currentSlide === maxSlides) {
    currentSlide = 0
  } else {
    currentSlide++
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - currentSlide)}%)`
  })
})

prevSlide.addEventListener('click', function () {
  // check if current slide is the first and reset current slide to last
  if (currentSlide === 0) {
    currentSlide = maxSlides
  } else {
    currentSlide--
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - currentSlide)}%)`
  })
})

slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`
})
