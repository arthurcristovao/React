import React, { useState, useEffect } from 'react';

function App() {

  const [tarefas, setTarefas] = useState([]);


  // like a component did mount
  useEffect( () => {
    const tarefasStorage = localStorage.getItem('tarefas');

    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);

  //like a component did update
  useEffect( ( ) => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
  }, [tarefas])

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
