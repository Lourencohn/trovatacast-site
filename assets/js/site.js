function animarTraco() {
  const dueto = document.querySelector('.dueto')
  if (!dueto) return
  const repetir = dueto.querySelector('.dueto__repetir')
  const semMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (semMovimento) return

  const tocar = () => {
    dueto.classList.remove('dueto--animando')
    void dueto.offsetWidth
    dueto.classList.add('dueto--animando')
  }

  dueto.querySelector('.traco__sublinhado')?.addEventListener('animationend', () => {
    repetir.hidden = false
  })
  repetir.addEventListener('click', tocar)

  const observador = new IntersectionObserver((entradas) => {
    if (!entradas.some((e) => e.isIntersecting)) return
    observador.disconnect()
    tocar()
  }, { threshold: 0.4 })
  observador.observe(dueto)
}

function marcarTopo() {
  const topo = document.querySelector('.topo')
  const atualizar = () => topo.classList.toggle('topo--rolado', window.scrollY > 8)
  atualizar()
  window.addEventListener('scroll', atualizar, { passive: true })
}

animarTraco()
marcarTopo()
