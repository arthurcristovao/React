import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      status : 0,
      status2 : false
    };

    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
  }

  entrar(){
    this.setState( { status2: true } )
  }

  sair(){
    this.setState( { status2: false } )
  }

  render(){
    let texto;

    // Pode usar ternário
    // Pode usar a condição dentro das chaves no html
    // Ou pode usar como abaixo

    if(this.state.status === 1)
      texto = <h1>Renderização condicional</h1>
    else
      texto = '';

    return (
      <div>
        { texto }

        <h1> Bem vindo ao sistema!</h1>
        
        
        { this.state.status2 ? 
          <div>
            <h1>Você está logado</h1>
            <button onClick={ this.sair }> Sair </button>
          </div> 
          : 
          <div>
            <h1>Faça login, visitante!</h1>
            <button onClick={ this.entrar }> Entrar </button>
          </div>
        }

        <div>
          <h2>Curso React JS</h2>
        </div>
      </div>
    );
  }
}

export default App;