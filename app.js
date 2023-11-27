// DOM Elements
let notificationBtn = document.querySelector('.notify')
let notification = document.querySelector('.notification')
let menu = document.querySelector('.menu')
let dropdownBtn = document.querySelector('.open_icon')
let setupDetails = document.querySelector('.setup_details')
let accordionHeader = document.querySelector('.section_header')
//let content = document.querySelector('.text')
let openIcon = document.querySelector('.icon_close')
let cancelBtn = document.querySelector('.camcel')
let planDetails = document.querySelector('.plan_details')

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
  planDetails.style.display =
    planDetails.style.display === 'none' || planDetails.style.display === ''
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
}

accordionHeader.forEach(function (header) {
  header.addEventListener('click', function () {
    toggleAccordion(header)
  })
})
