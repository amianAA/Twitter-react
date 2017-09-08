import React from 'react'
import 'normalize-css'
import styles from './app.css'

import Header from '../Header'
import Main from '../Main'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      user: {
        photoURL: 'https://abs.twimg.com/icons/apple-touch-icon-192x192.png',
        email: 'mail@mail.com',
        onOpenText: 'false'
      }
    }
  }
  render() {
    return (
      <div>
        <Header />
        <Main user= {this.state.user}/>
      </div>
    )
  }
}

export default App
