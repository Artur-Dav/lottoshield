const primaryBlock = document.querySelector('.primary-block')

document.querySelector('.cr-year').innerHTML = new Date().getFullYear()

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
  el.addEventListener('mouseenter', () => {
    const p = document.querySelector('.primary-block')
    p.classList.remove('primary-block')
    p.classList.add('secondary-block')

    el.classList.remove('secondary-block')
    el.classList.add('primary-block')
  })
  el.addEventListener('mouseleave', () => {
    const c = document.querySelector('.block-center')
    c.classList.remove('secondary-block')
    c.classList.add('primary-block')

    el.classList.add('secondary-block')
    el.classList.remove('primary-block')
  })
})