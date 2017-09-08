import React, { Component } from 'react'
import styles from './styles.css'
class ProfileBar extends Component {

  constructor () {
    super()
  }
  // propiedades hacia abajo, eventos hacia arriba
  render() {
    return(
    <div className={styles.root}>
      <figure>
        <img className={styles.avatar} src={this.props.picture} alt=""/>
      </figure>
      <span className={styles.username}>Hola @{this.props.username}</span>
      <button onClick={this.props.onOpenText} className={styles.button}>
        <span className='fa fa-lg fa-edit'></span> Tweet!
      </button>
    </div>
  )}
}

export default ProfileBar
