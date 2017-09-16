import React, { Component } from 'react'
import uuid from 'uuid'
import MessageList from '../MessageList'
import InputText from '../InputText'
import ProfileBar from '../ProfileBar'

class Main extends Component {
  constructor(props) {
    super(props) //llama al component padre
    this.state = {
      user: Object.assign({}, this.props.user, { retweets: [] }, { favorites: [] }),
      openText: false,
      messages: [{ // Aqui es donde se haría la llamada a la API, BBDD o fuente de datos para pasar al resto de componentes
        id: uuid.v4(),
        text: 'Hola Caraculo',
        picture: 'https://abs.twimg.com/icons/apple-touch-icon-192x192.png',
        displayName: 'Alvaro Amian',
        username: 'aamian',
        date: Date.now(),
        retweets: 0,
        favorites: 0
      },
      {
        id: uuid.v4(),
        text: 'Hola Caracola',
        picture: 'https://abs.twimg.com/icons/apple-touch-icon-192x192.png',
        displayName: 'Alvaro Amian',
        username: 'aamian',
        date: Date.now() - 1800000,
        retweets: 0,
        favorites: 0
      }]
    }
    this.handleSendText = this.handleSendText.bind(this)
    this.handleCloseText = this.handleCloseText.bind(this)
    this.handleOpenText = this.handleOpenText.bind(this)
    this.handleRetweet = this.handleRetweet.bind(this)
    this.handleFavorite = this.handleFavorite.bind(this)
  }
  handleSendText(event) {
    event.preventDefault()
    let newMessage = {
      id: uuid.v4(),
      username: this.props.user.email.split('@')[0],
      displayName: this.props.user.displayName,
      date: Date.now(),
      text: event.target.text.value // el target indica donde sucede el evento (formulario)       
    }
    console.log(newMessage)
    // this.setState({ openText: false })
  }
  handleCloseText(event){
    event.preventDefault()
    this.setState({ openText: false })
  }

  handleOpenText (event) {
    event.preventDefault()
    this.setState({ openText: true }) // configura el estado, funcion propia de react
  }
  
  handleRetweet(msgId){
    let alreadyRetweeted = this.state.user.retweets.filter(rt => rt == msgId)
    
    if(alreadyRetweeted.length == 0) {
      let messages = this.state.messages.map(msg => {
        if (msg.id == msgId) {
          msg.retweets++
        }
        return msg
      })
      let user = Object.assign({}, this.state.user)
      user.retweets.push(msgId)
      this.setState({
        messages,
        user
      })      
    }  
  }
  
  handleFavorite(msgId){
    let alreadyFavorited = this.state.user.favorites.filter(fav => fav == msgId)
    
    if(alreadyFavorited.length == 0) {
      let messages = this.state.messages.map(msg => {
        if (msg.id == msgId) {
          msg.favorites++
        }
        return msg
      })
      let user = Object.assign({}, this.state.user)
      user.favorites.push(msgId)
      this.setState({
        messages,
        user
      })
    }
  }

  renderOpenText(){
    if(this.state.openText) {
      return (
        <InputText 
          onSendText={this.handleSendText}
          onCloseText={this.handleCloseText}
        />
      )
    }
  }
  render() { // Si se renderiza más de un elemento, el div es necesario
    return (
      <div>
        <ProfileBar
        picture={this.props.user.photoURL}
        username= {this.props.user.email.split('@')[0]}
        onOpenText= {this.handleOpenText} />
        {this.renderOpenText()}
        <MessageList 
        messages={this.state.messages} 
        onRetweet={this.handleRetweet}
        onFavorite={this.handleFavorite}
        />
      </div>
    )// El MessageList va a renderizar el array con los mensajes
  }
}

export default Main
