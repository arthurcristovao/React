import React, { useState } from 'react';

function App() {

  const [tarefas, setTarefas] = useState([
    'Pagar conta de luz',
    'Estudar React Hooks'
  ]);

  const [ input, setInput ] = useState('');

  function handleAdd(){
    setTarefas([...tarefas, input])
    setInput('');
  }

  return (
    <div>
      <h1>Hooks</h1>
      <ul>
        { tarefas.map(tarefa => (
          <li key={tarefa}>{ tarefa }</li>
        ))}
      </ul>

      <input type="text" value={input} onChange={ e => setInput( e.target.value ) }/> 
      <button type='button' onClick={handleAdd}> Adicionar </button>
    </div>
  );
}

export default App;
