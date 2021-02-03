const mobileMenu = document.querySelector('.mobile-nav-bar')
const menuBurger = document.querySelector('#burger')

// Functions
const toggleMenu = () => {
  mobileMenu.classList.toggle('open')
}

// Event listeners
menuBurger.addEventListener('click', toggleMenu)

document.addEventListener('click', e => {
  e.target.classList.contains('mobile-nav-bar__menus--link') && toggleMenu()
})