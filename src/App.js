import React, { Component } from 'react'
import './style.css'

class App extends Component {

    constructor (props){

      super (props)
      this.state = {
        textPhrases: ''
      }

      this.smashCookie = this.smashCookie.bind(this)

      this.phrases = [
      'Siga os bons e aprenda com eles.', 
      'O bom-senso vale mais do que muito conhecimento.', 
      'O riso é a menor distância entre duas pessoas.', 
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'
    ];

    }

    smashCookie() {
      let state = this.state
      let numberRandom = Math.floor(Math.random() * this.phrases.length)
      state.textPhrases = '" ' + this.phrases[numberRandom] + ' "'
      this.setState(state)
    }

  render() {
    return (
      <div className="content">
        <img src={require('./assets/biscoito.png')} classname="img"/>
        <Button nome="Abrir Biscoito" actionBtn={this.smashCookie} />
        <h3 className="textPhrases">{this.state.textPhrases}</h3>
      </div>
    )
  }
}

class Button extends Component {
  render () {
    return (
      <div>
        <button onClick={this.props.actionBtn}>{this.props.nome}</button>
      </div>
    )
  }
}


export default App;