import React, {Component} from 'react'
import {connect} from 'react-redux'
import MenuItem from './MenuItem'
import Phone from './Phone'
import Loader from '../Loader'
import ErrorCmp from '../ErrorCmp'

class Menu extends Component {
	
	state = {
		class: 'normalTop'
	}

	componentDidMount(){
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
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
		var scrolled = window.pageYOffset || document.documentElement.scrollTop;

		this.setState({
			class: scrolled < 215 ? 'normalTop' : 'fixedTop'
		})
	}
}


const mapStateToProps = (state) => {
	return {
		menu: state.menu.entities.valueSeq().toArray(),
		loading: state.menu.loading,
		error: state.menu.error
	}
}

export default connect(mapStateToProps)(Menu)