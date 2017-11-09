import React, {Component} from 'react'
import {connect} from 'react-redux'
import MenuItem from './MenuItem'
import Phone from './Phone'
import Loader from '../Loader'
import ErrorCmp from '../ErrorCmp'
import {MENU} from '../../config.js'
import {errorSelector, loadMenu, entitiesDataSelector, loadingSelector, loadedSelector} from '../../ducks/menu'

class Menu extends Component {
	
	state = {
		class: 'normalTop'
	}

	componentDidMount(){
		if(!this.props.loaded) this.props.loadMenu(MENU)  
		
		window.addEventListener('scroll', this.handleScroll)
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll)
	}

	render(){
		const {menu, loading, error} = this.props

		if (error) return (<nav className={`top ${this.state.class}`}><ErrorCmp error={error} /></nav>)						
		if (loading) return (<nav className={`top ${this.state.class}`}><Loader /></nav>)	

		const menuItem = menu.map(item => <li key={item.id}>
																				<MenuItem item={item} />
																			</li>)
	
		return (
			<nav className={`top ${this.state.class}`} onScroll={this.handleScroll}>
				<ul>
					{menuItem}
				</ul>
				<Phone />
			</nav>
		)
	}

	handleScroll = ev => {
		const scrolled = window.pageYOffset || document.documentElement.scrollTop;

		if (((scrolled < 215) && (this.state.class === 'normalTop')) ||
			((scrolled > 215) && (this.state.class === 'fixedTop'))) return

		if ((scrolled > 215) && (this.state.class === 'normalTop')) {
			this.setState({
			 	class: 'fixedTop'
			})
		}

		if ((scrolled < 215) && (this.state.class === 'fixedTop')) {
			this.setState({
			 	class: 'normalTop'
			})
		}

	}
}


const mapStateToProps = (state) => {
	return {
		menu: entitiesDataSelector(state),
		loading: loadingSelector(state),
		loaded: loadedSelector(state),
		error: errorSelector(state)
	}
}

export default connect(mapStateToProps, {loadMenu})(Menu)