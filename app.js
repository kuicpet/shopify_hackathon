// DOM Elements
let notificationBtn = document.querySelector('.notify')
 let notification = document.querySelector('.notification')

const toggleNotis = () => {
  notification.style.display =
    notification.style.display === 'none' || notification.style.display === ''
      ? 'block'
      : 'none'
}
