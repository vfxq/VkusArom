import React, {Component} from 'react'
import {connect} from 'react-redux'
import Loader from '../Loader'
import renderHTML from 'react-render-html'
import ErrorCmp from '../ErrorCmp'
import DistribItem from './DistribItem'
import DistribList from './DistribList'
import DistribItemInfo from './DistribItemInfo'
import {loadDistribs, entitiesSelector, loadingSelector, loadedSelector, errorSelector} from '../../ducks/distribs'
import { DISTRIBS } from '../../config'
import scrollToElement from 'scroll-to-element'

class Distribs extends Component{
	
	state = {
		openDistribId: null
	}

	componentDidMount(){
		if(!this.props.loaded) this.props.loadDistribs(DISTRIBS)
		
		var elem = document.querySelector('body')
		scrollToElement(elem)
	}

	render(){
		const {distribs, loading, error, contacts} = this.props

		if (loading) return (<section className="about"><Loader /></section>)
		if (error) return (<section className="about"><ErrorCmp error={error} /></section>)	

		const body =  distribs.map(item => 
																<li key={item.id} className={`distr ${item.slug}`}>
																	<DistribItem 
																		item={item} 
																		toggleOpenDistrib = {this.toggleOpenDistrib(item.id)}
																	/>
																</li>) 
																	
		const bodyInfo =  distribs.map(item => 
																		<li key={item.id} className={`distr ${item.slug}`}>
																			<DistribItemInfo
																				item={item} 
																				isOpen={item.id === this.state.openDistribId}																												
																				closeDistrib = {this.closeDistrib()}
																			/>
																		</li>) 
																	
 
		return(
			<section className="info">
				<h1 className="dark">ДИСТРИБЬЮТОРЫ</h1>
				<ul className="distrMap">
					{body}
					{bodyInfo}
				</ul>
				<DistribList />
			</section>
		)

	}
	
	toggleOpenDistrib = openDistribId => ev => {
		this.setState({
		 	openDistribId
		})
	}

	closeDistrib = () => ev => {
		this.setState({
			openDistribId: null
		})
	}

}

const mapStateToProps = state => {
	return {
		contacts: state.contacts.entities,
		distribs: entitiesSelector(state),
		loaded: loadedSelector(state),
		loading: loadingSelector(state),
		error: errorSelector(state)
	}
}

export default connect(mapStateToProps, {loadDistribs})(Distribs)