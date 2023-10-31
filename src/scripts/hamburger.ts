const closeAnimation = [{ height: '100vh' }, { height: '0vh' }]

const animation = {
  duration: 300,
  iterations: 1,
}

document.addEventListener('astro:page-load', () => {
  document.querySelector('.hamburger')?.addEventListener('mousedown', () => {
    document.querySelector('.nav-links')?.classList.toggle('expanded')
    document.querySelector('.cross')?.classList.toggle('show')
  })

  document.querySelector('.cross')?.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links') as HTMLElement
    navLinks?.animate(closeAnimation, animation)
    document.querySelector('.cross')?.classList.toggle('show')
    setTimeout(() => {
      navLinks?.classList.toggle('expanded')
    }, 200)
  })
})
