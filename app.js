// DOM Elements
let notificationBtn = document.querySelector('.notify')
let notification = document.querySelector('.notification')
let menu = document.querySelector('.menu')
let dropdownBtn = document.querySelector('.open_icon')
let setupDetails = document.querySelector('.setup_details')
let accordionHeaders = document.querySelectorAll('.section_header')
//let content = document.querySelector('.text')
let openIcon = document.querySelector('.icon_close')
let cancelBtn = document.querySelector('.cancel')
let plans = document.querySelector('.plans')
let progressBar = document.querySelector('.progress_bar')
const checkedSteps = document.querySelectorAll('.step input:checked').length

const toggleNotis = () => {
  notification.style.display =
    notification.style.display === 'none' || notification.style.display === ''
      ? 'block'
      : 'none'
}

const toggleMenu = () => {
  menu.style.display =
    menu.style.display === 'none' || menu.style.display === ''
      ? 'block'
      : 'none'
}

const toggleCancel = () => {
  plans.style.display =
    plans.style.display === 'none' || plans.style.display === ''
      ? 'block'
      : 'none'
}

const toggleDropdown = () => {
  setupDetails.style.display =
    setupDetails.style.display === 'none' || setupDetails.style.display === ''
      ? 'block'
      : 'none'
  openIcon.classList.toggle('rotate')
}

const toggleAccordion = (header) => {
  let content = header.nextElementSibling
  content.classList.toggle('show')
  // Close other accordions
  accordionHeaders.forEach((otherHeader) => {
    if (otherHeader !== header) {
      otherHeader.nextElementSibling.classList.remove('show')
    }
  })
}

/*
accordionHeader.forEach(function (header) {
  header.addEventListener('click', function () {
    toggleAccordion(header)
  })
})*/

function stopPropagation(event) {
  event.stopPropagation()
}

const updateProgress = (step) => {
  const progress = (checkedSteps / 5) * 100
  progressBar.style.width = `${progress}%`
}
