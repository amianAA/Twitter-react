import React, { Component } from 'react'
import uuid from 'uuid'
import MessageList from '../MessageList'
import InputText from '../InputText'
import ProfileBar from '../ProfileBar'

class Main extends Component {
  constructor() {
    super() //llama al component padre
    this.state = {
      openText: false,
      messages: [{ // Aqui es donde se haría la llamada a la API, BBDD o fuente de datos para pasar al resto de componentes
        id: uuid.v4(),
        text: 'Hola Caraculo',
        picture: 'https://abs.twimg.com/icons/apple-touch-icon-192x192.png',
        displayName: 'Alvaro Amian',
        username: 'aamian',
        date: Date.now()
      },
      {
        id: uuid.v4(),
        text: 'Hola Caracola',
        picture: 'https://abs.twimg.com/icons/apple-touch-icon-192x192.png',
        displayName: 'Alvaro Amian',
        username: 'aamian',
        date: Date.now() - 1800000
      }]
    }
  }

  handleOpenText (event) {
    event.preventDefault()
    this.setState({openText: true}) // configura el estado, propio de react
  }

  renderOpenText(){
    if(this.state.openText) {
      return <InputText />
    }
  }
  render() { // Si se renderiza más de un elemento, el div es necesario
    return (
      <div>
        <ProfileBar
        picture={this.props.user.photoURL}
        username= {this.props.user.email.split('@')[0]}
        onOpenText= {this.handleOpenText.bind(this)} />
        {this.renderOpenText()}
        <MessageList messages={this.state.messages} />
      </div>
    )// El MessageList va a renderizar el array con los mensajes
  }
}

export default Main
