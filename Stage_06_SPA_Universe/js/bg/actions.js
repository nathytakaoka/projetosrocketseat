export function bghome() {
  document.body.classList.remove('universe')
  document.body.classList.remove('explore')
  document.body.classList.add('home')
}

export function bguniverse() {
  document.body.classList.remove('home')
  document.body.classList.remove('explore')
  document.body.classList.add('universe')
}

export function bgexplore() {
  document.body.classList.remove('universe')
  document.body.classList.remove('home')
  document.body.classList.add('explore')
}