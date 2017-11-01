import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {CATALOGUE} from '../../config.js'
import {loadAromType} from '../../AC'

class Submenu extends Component {
	
	render(){
		const {submenu} = this.props

		const submenuItem = submenu.map(item => <li key={item.id}><Link to={`/catalogue${item.url}`} onClick={this.handleClick} >{item.title}</Link></li>)
		return(
			<ul className='sub-menu'> 				
				{submenuItem}
			</ul>
		)
	}

	handleClick = ev => {
		this.props.closeMenu()
	}
}


export default connect(null, {loadAromType})(Submenu)