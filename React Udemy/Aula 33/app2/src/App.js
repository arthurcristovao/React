import React from 'react';

const Equipe = ( props ) => {
  return (
    <div>
      <hr></hr>
      <Sobre nome = {props.nome} cargo = {props.cargo}
              idade = {props.idade} />
      <Social fb={props.facebook}/>
    </div>
  );
}

const Sobre = (props) => {
  return(
    <div>
      <h2>Olá sou o(a) {props.nome} </h2>
      <h3>Cargo: {props.cargo} </h3>
      <h3>Idade: {props.idade} </h3>
    </div>
  );
}

const Social = (props) => {
  return (
    <div>
      <a href={props.fb}> Facebook </a>
      <a>LinkedIn </a>
      <a>Youtube </a>
    </div>
  );
}

  function App(){
    return(
      <div>
        <h1>Conheça a nossa equipe: </h1>
        <Equipe nome="Arthur" cargo="Programador" idade="23" facebook="http://fb.com"/>
        <Equipe nome="Laura" cargo="Advogada" idade="23" facebook="http://google.com"/>
      </div>
    );
  }

export default App;