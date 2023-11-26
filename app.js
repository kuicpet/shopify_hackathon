// DOM Elements
let notificationBtn = document.querySelector('.notify')
let notification = document.querySelector('.notification')
let menu = document.querySelector('.menu')
let dropdownBtn = document.querySelector('.open_icon')
let setupDetails = document.querySelector('.setup_details')

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

const toggleDropdown = () => {
  setupDetails.style.display =
    setupDetails.style.display === 'none' || setupDetails.style.display === ''
      ? 'block'
      : 'none'
}
