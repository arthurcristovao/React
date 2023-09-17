import React, { Component } from 'react';
import './estilo.css'

import biscoito from './assets/biscoito.png';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            textoFrase: ''
        };

        this.quebraBiscoito = this.quebraBiscoito.bind(this);

        this.frases = [
          'Believe in yourself and you will be on the right path to success.',
          'Failure is just an opportunity to start over with more intelligence.',
          'Think big and don\'t be afraid to fail; success will come.',
          'Persistence is the key to overcoming any obstacle.',
          'Nothing is impossible when you believe in yourself.',
          'Every day is a chance to be better than yesterday.',
          'Believe in your dreams and make them happen.',
          'Success is the sum of small efforts repeated day after day.',
          'Don\'t wait for opportunities, create them.',
          'Optimism is the faith that leads to achievement.',
          'The only place where success comes before work is in the dictionary.',
          'The difference between a dream and a goal is a plan.',
          'Fight for your dreams, even if it means facing challenges.',
          'Life is a journey, and the journey is as important as the destination.',
          'When you want something, the whole universe conspires in your favor.',
          'It\'s never too late to be what you could have been.',
          'You are stronger than you think and more capable than you imagine.',
          'Believe in your unlimited potential.',
          'Difficulties prepare ordinary people for extraordinary destinies.',
          'The future belongs to those who believe in the beauty of their dreams.'
        ];
        
        

    }

    quebraBiscoito(){
        let state = this.state;
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "'
        this.setState(state);

    }

    render(){
        return(
            <div className="container">
                <img src={biscoito} className="img" />
                <Botao nome="Open the cookie" acaoBtn={this.quebraBiscoito}/>
                <h3 className="textoFrase">{this.state.textoFrase}</h3>
            </div>         
        );
    }
}

class Botao extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBtn}> {this.props.nome}</button>
            </div>
        );
    }
}



export default App;