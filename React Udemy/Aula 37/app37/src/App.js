import React, { Component } from 'react';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      hora: '00:00:00'
    };
  }

  componentDidMount(){
    // Função React que serve para manipular o DOM em tempo real, 
    // Ele é executado uma vez, logo após o primeiro render.
    
    // Útil para configurações iniciais de uma página web, 
    // como buscar dados de uma API, configurar temporizadores, 
    // ou interagir com o DOM após a renderização inicial.

    setInterval(() => {
      this.setState({hora: new Date().toLocaleTimeString()})
    }, 1000);
  }


  
  componentDidUpdate(){
    // Este método é invocado sempre que o componente é atualizado
    // (recebe novas propriedades ou tem seu estado alterado).
    //  É útil para realizar ações como atualizar o DOM com base nas mudanças de estado ou props.

    console.log("Atulizou!!");
  }



  shouldComponentUpdate(){
    //O método shouldComponentUpdate é chamado antes de o componente ser re-renderizado. 
    //Ele recebe dois argumentos: nextProps (as próximas propriedades) e nextState (o próximo estado).

    //A função shouldComponentUpdate é usada para decidir se o componente deve ou não ser re-renderizado. 
    //Retorna true se você deseja permitir que a atualização ocorra ou false se você deseja impedir a atualização.
  }

  render(){
    return(
      <div>
        <h1>Meu projeto {this.state.hora}</h1>
      </div>
    );
  }
}

export default App;