class CategoriaView {

  constructor(){
    this._listagem = document.querySelector('#lista-categorias')
  }

  templateListagem(categorias){
    return `
      ${categorias.listar().map(categoria => {
        return `
        <li>
          <a href="#" class="link-category">
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" class = "mr-1">
          <circle cx="4.5" cy="4.5" r="4.5" fill ="${categoria.cor}"/>
          </svg> ${categoria.descricao}
          </a>
        </li>
        `
      }).join('')}
    `
  }

  montarListagem(categorias){
    this._listagem.innerHTML = ''
    this._listagem.innerHTML = this.templateListagem(categorias)
  }
}
