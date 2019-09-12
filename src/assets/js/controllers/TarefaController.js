class TarefaController{
  
  constructor(){
    this._tarefas = new Tarefas()

    this._tarefaService = new TarefaService()

    this._tarefaView = new TarefaView()
  }


  montar(descricao){
    this._tarefaService.listaTodas(descricao)
        .then(tarefas => tarefas.map (t => this._tarefas.adicionar(t)))
        .then(() => this._tarefaView.montarGrid(this._tarefas))
  }


}
