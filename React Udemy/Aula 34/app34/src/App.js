import React, { Component } from 'react';

class Equipe extends Component{
  render(){
    return (
      <div>
        <Sobre  nome = {this.props.nome}
                cargo = { this.props.cargo}
                idade = { this.props.idade}  
        />
        <Social/>
      </div>
    );
  }
}

class Sobre extends Component{
  render(){
    return(
      <div>
        <hr></hr>
        <h2>Nome: {this.props.nome}</h2>
        <h3>Cargo: {this.props.cargo}</h3>
        <h3>Idade: {this.props.idade}</h3>
      </div>
    );
  }
}

const Social = () => {
  return (
    <div>
      <a>Facebook </a>
      <a>LinkedIn </a>
    </div>
  );
}

function App(){
  return (
    <div>
      <h1>Conheça a nossa equipe</h1>
      <Equipe nome="Arthur" cargo = "Programador" idade = "23"/>
      <Equipe nome="Arthur" cargo = "Programador" idade = "23"/>
    </div>
  );
}

export default App;