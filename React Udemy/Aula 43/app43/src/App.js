import React, { Component } from 'react';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome: '',
      email: '',
      senha: '',
      error: ''
    };

    this.cadastrar = this.cadastrar.bind( this );
  }

  cadastrar(event){
    const { nome, email, senha } = this.state;

    if( nome !== '' && email !== '' && senha !== ''){
      alert(`Nome: ${nome}, \nEmail: ${ email },  \nSenha: ${ senha }`);

    } else {  
      this.setState({ error: 'Ops! Parece que esta faltando algo!'});
    }

    // Impede a página de atualizar depois que for enviado o formulário.
    event.preventDefault();
  }

  render(){
    return(
      <div>
        <h1>Novo usuário</h1>
        { this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.cadastrar}>
          <label> Nome: 
            <input type='text' value={ this.state.nome }
            onChange={ ( e ) => this.setState({ nome : e.target.value }) } /> 
          </label>
          <br/><br/>
          <label> Email: 
            <input type='email' value={ this.state.email }
            onChange={ ( e ) => this.setState({ email : e.target.value }) } /> 
          </label>
          <br/><br/>
          <label> Senha: 
            <input type='password' value={ this.state.senha }
            onChange={ ( e ) => this.setState({ senha : e.target.value }) } /> 
          </label>
          <br/><br/>
          <button type='submit'> Cadastrar </button>
        </form>

      </div>
    );
  }
}

export default App;