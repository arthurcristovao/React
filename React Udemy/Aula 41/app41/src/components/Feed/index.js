import React, { Component } from 'react';

class Feed extends Component{

    render(){
        const { item } = this.props

        return(
            <div key={ item.id }>
              <h3>{ item.username }</h3>
              <a> { item.curtidas } { item.curtidas === 1 ? 'curtida' : 'curtidas' } / 
                    {item.comentarios} { item.comentarios === 1 ? 'comentário' : 'comentários'}  </a>
            </div>
        );
    }
}

export default Feed;