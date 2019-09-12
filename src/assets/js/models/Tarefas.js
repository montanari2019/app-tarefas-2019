class Tarefas{
  constructor(){
    this._tarefas = []
  }

  adicionar(tarefa){
    this._tarefas.push(tarefa)
  }

  listar(){
    return this._tarefas
  }

  limpar(){
    this,this._tarefas = []
  }
}
