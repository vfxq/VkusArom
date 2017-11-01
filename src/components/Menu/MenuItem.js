import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Submenu from './Submenu'

class MenuItem extends Component{
	state = {
		isOpen: false
	}

	render(){
		const {item} = this.props

		const body = <Link to={item.url}>{item.title}</Link>

	
		if (item.children.length > 0){
			const submenu = this.state.isOpen ? <Submenu submenu={item.children} closeMenu={this.closeMenu}/> : null
			
			return(
				<div onMouseEnter = {this.toggleMenu} onMouseLeave = {this.toggleMenu}>
					{body}
					{submenu}
				</div>
			)
		}

			return(
				<div>
					{body}
				</div>
			)
	}

	toggleMenu = ev => {
		this.setState({
		 	isOpen: !this.state.isOpen
		})
	}

	closeMenu = ev => {
		this.setState({
		 	isOpen: false
		})
	}

}

export default MenuItem