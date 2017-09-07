import React, { Component } from 'react'
import MessageList from '../MessageList'
class Main extends Component {
  constructor() {
    super() //llama al component padre
    this.state = {
      messages: [{
        text: 'Hola Caraculo',
        picture: 'https://abs.twimg.com/icons/apple-touch-icon-192x192.png',
        displayName: 'Alvaro Amian',
        username: 'aamian',
        date: Date.now()
      }]
    }
  }

  render() {
    return (
      <MessageList messages={this.state.messages} /> // va a renderizar el array con los mensajes
    )
  }
}

export default Main
