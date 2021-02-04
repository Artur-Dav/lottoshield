const mobileMenu = document.querySelector('.mobile-nav-bar')
const menuBurger = document.querySelector('#burger')
const desktopSliderSecondaryBlocks = document.querySelectorAll('.secondary-block')
const desktopSliderPrimaryBlock = document.querySelector('.primary-block')

// Functions
const toggleMenu = () => {
  mobileMenu.classList.toggle('open')
}

// Event listeners
menuBurger.addEventListener('click', toggleMenu)

document.addEventListener('click', e => {
  e.target.classList.contains('mobile-nav-bar__menus--link') && toggleMenu()
})

desktopSliderSecondaryBlocks.forEach(el => {
  el.addEventListener('mouseenter', e => {
    el.style.transform = 'scale(1.35)'
    desktopSliderPrimaryBlock.style.transform = 'scale(0.75)'
  })
  el.addEventListener('mouseleave', e => {
    el.style.transform = 'scale(1)'
    desktopSliderPrimaryBlock.style.transform = 'scale(1)'
  })
})