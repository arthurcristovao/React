// export default function App(){
//   return (
//     <div>
//       <h1>Bem vindo ao sistema</h1>
//       <h2>Arthur Cristovão</h2>
//     </div>
//   );
// }

import React from 'react';

  const Bemvindo = (props) => {
    return(
      <div>
        <h1>Bem-vindo(a) {props.nome}!</h1>
        <h3>Tenho {props.idade} anos!</h3>
      </div>
    );
  }

  function App(){
    return(
      <div>
        Olá, Mundo!
        <Bemvindo nome="Arthur C" idade="23"/>
        <Bemvindo nome="João" idade="25"/>
        <h1>Curso React</h1>
      </div>
    );
  }

export default App;