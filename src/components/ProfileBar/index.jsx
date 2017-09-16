import React, { Component } from 'react'						//Importa lo que requiera de componentes
import styles from './profilebar.css'

class ProfileBar extends Component {
	constructor (props) {
		super(props)											//Usa todo lo heredado
	}	

	render () {
		return (
			<div className = { styles.root }>
				<figure>
					<img className = { styles.avatar } src = { this.props.picture } />
				</figure>
				<span className = { styles.username } >
					Hola @{ this.props.username }!
				</span>
				<button onClick = { this.props.onOpenText }
						className = { styles.button }>
					<span className = 'fa fa-lg fa-edit'></span>  Tweet!
				</button>							
			</div>
		)
	}
}

export default ProfileBar