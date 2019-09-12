class TarefaView{
  constructor(){
    this._gird = document.querySelector("#grid")
  }

  templateGrid(tarefas){
    return `
      ${tarefas.listar().map(t => {
        return `
          <section class="task-background d-flex m-3">
          <div>
            <input type="checkbox" class="mt-1">
          </div>
          <div class="flex-fill ml-2 mr-2">
            <div><a href="#" class="link-task">${t.descricao}</a></div>
            <div class="text-muted font-text">09/09/2019 as 12:00</div>
             <a href="#" class="link-category">
             <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" class = "mr-1">
            <circle cx="4.5" cy="4.5" r="4.5" fill ="${t.cor}"/>
            </svg> 
           ${t.categoria}</div>
          </div>
          <div>
            <a href="#"><img src="assets/images/delete.svg" alt=""></a>
          </div>
          </section>
        
        `
      }).join('')}
    `
  }

  montarGrid(tarefas){
    this._gird.innerHTML = ''
    this._gird.innerHTML = this.templateGrid(tarefas)
  }
}
