import React, { Component } from 'react';
import Membro from './components/Membro/Membro';

// import Membro from './components/Membro';
// o react detecta os arquivos com nome index.js, se mudar o nome do arquivo da classe Membro para este.


class App extends Component{
  render(){
    return(
      <div>
        <Membro nome = "Visitante"/>
      </div>
    );
  }
}

export default App;