const mobileMenu = document.querySelector('.mobile-nav-bar')
const menuBurger = document.querySelector('#burger')

// Functions
const toggleMenu = () => {
  mobileMenu.classList.toggle('open')
}

// Event listeners
menuBurger.addEventListener('click', toggleMenu)