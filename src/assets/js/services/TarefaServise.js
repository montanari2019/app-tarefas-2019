class TarefaService extends Service{

  constructor(){
    super()
    this._path = `${this._url}/tarefas?f=`
  }

  listaTodas(descricao){
    return fetch(`${this._path} ${descricao}`)
              .then(res => res.json())
              .catch(erro => console.log(erro))
    }
  }


