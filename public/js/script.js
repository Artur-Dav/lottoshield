// Functions
const toggleMenu = () => {
  document.querySelector('.mobile-nav-bar').classList.toggle('open')
}

// Event listeners
document.querySelector('#burger').addEventListener('click', toggleMenu)

document.addEventListener('click', e => {
  e.target.classList.contains('mobile-nav-bar__menus--link') && toggleMenu()
})

document.querySelectorAll('.secondary-block').forEach(el => {
  el.addEventListener('mouseenter', e => {
    el.style.transform = 'scale(1.35)'
    document.querySelector('.primary-block').style.transform = 'scale(0.75)'
  })
  el.addEventListener('mouseleave', e => {
    el.style.transform = 'scale(1)'
    document.querySelector('.primary-block').style.transform = 'scale(1)'
  })
})