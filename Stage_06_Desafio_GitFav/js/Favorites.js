import { GithubUser } from "./GithubUser.js"

// classe que vai conter a lógica dos dados
// como os dados serão estruturados
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()

  }

  load() {
    this.entries = JSON.parse(localStorage.getItem('@hithub-favorites:')) || []
  }

  save() {
    localStorage.setItem('@hithub-favorites:', JSON.stringify(this.entries))

  }
  
  async add(username) {
    try {

      const userExists = this.entries.find(entry => entry.login === username)

      if(userExists) {
        throw new Error('Usuário já cadastrado')
      }

      const user = await GithubUser.search(username)

      if(user.login === undefined) {
        throw new Error('Usuário não encontrado!')
      }

      this.entries = [user, ...this.entries ]
      this.update()
      this.save()

    }

    catch(error) {
      alert(error.message)
    }
    
  }

  delete(user) {
    //higher-order functions (map, filter, find, reduce)
    const filteredEntries = this.entries.filter(entry => entry.login !== user.login)

    this.entries = filteredEntries
    this.update()
    this.save()
  }

  checkEmpty() {
    if(((this.entries).length) == 0) {
      const row = this.createEmptyRow()
      this.tbody.append(row)
    }
    else {
      this.update()
      this.save()
    }
    
  }
}

// classe que criará a visualização e eventos do html (construir tabela)

export class FavotiresView extends Favorites {
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector('table tbody')
    this.update()
    this.checkEmpty()
    this.onadd()
  }

  onadd() {
    const addButton = this.root.querySelector('.search button')
    addButton.onclick = () => {
      const { value } = this.root.querySelector('.search input')
      this.add(value)
    }
  }

  update() {
    this.removeAllTr()

    

    this.entries.forEach( user => {
      const row = this.createRow()
      
      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagem de ${user.name}`
      row.querySelector('.user a').href = `https://github.com/${user.login}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = `/${user.login}`
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers

      row.querySelector('.remove').onclick = () => {
        const isOk = confirm('Tem certeza que deseja deletar essa linha?')

        if(isOk) {
          this.delete(user)
          this.checkEmpty()
          this.save()
        }
      }

      this.tbody.append(row)
    })
  }

  createRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = 
    `
    <td class="user">
    <img src="https://github.com/diego3g.png" alt="Imagem de diego3g">
    <a href="https://github.com/diego3g" target="_blank">
      <p>Diego Fernandes</p>
      <span>/diego3g</span>
    </a>
    </td>
    <td class="repositories">652</td>
    <td class="followers">876230</td>
    <td><button class="remove">Remover</button></td>
    `
    return tr
  }

  createEmptyRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = 
    `
    <td class="empty">
      <img src="./assets/Estrela.svg" alt="Imagem de estrela">
      <p class="roboto-mono">Nenhum favorito ainda</p>
    </td>
    `
    return tr
  }
  
  removeAllTr() {  
    this.tbody.querySelectorAll('tr')
    .forEach((tr) => {
      tr.remove()
    })

  }
}