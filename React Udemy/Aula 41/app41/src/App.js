import React, { Component } from 'react';
import Feed from './components/Feed';

class App extends Component{
  constructor(props){
    super(props);
    
    this.state = {
      feed: [
        { id: 1, username: 'Arthur', curtidas: 0, comentarios: 2},
        { id: 2, username: 'Laura', curtidas: 1, comentarios: 1},
        { id: 3, username: 'João', curtidas: 30, comentarios: 0},
        { id: 4, username: 'Lucas', curtidas: 40, comentarios: 8}
      ]
    };
  }

  render(){
    return (
      <div>
        { this.state.feed.map( ( item ) => {
          return(
            <Feed item = {item}/>
          );
        }) }
      </div>
    );
  }

}

export default App;