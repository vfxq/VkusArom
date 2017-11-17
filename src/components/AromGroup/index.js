import React, {Component} from 'react'
import {connect} from 'react-redux'
import Loader from '../Loader'
import ErrorCmp from '../ErrorCmp'
import {Map, Record} from 'immutable'
import AromTypeNavItem from './AromTypeNavItem'
import AromItemInfo from './AromItemInfo'
import {Route, Link, Switch} from 'react-router-dom'
import renderHTML from 'react-render-html'
import {CATALOGUE} from '../../config.js'
import {loadAromType} from '../../ducks/aromGroup'
import scrollToElement from 'scroll-to-element'

class AromType extends Component{

	componentDidMount(){
		this.props.loadAromType(CATALOGUE, this.props.match.params.type)
		var elem = document.querySelector('body')
		scrollToElement(elem)
	}

	componentWillReceiveProps(nextProps){
		const nextType = nextProps.match.params.type
		
		if(nextType != this.props.match.params.type)	return this.props.loadAromType(CATALOGUE, nextType)
	}

	render(){
		const {aromGroup, aromCat, aromCatName, loading, error, match} = this.props

		if (error) return (<section className="info"><ErrorCmp error={error} /></section>)	
		if(loading) return (<section className="info"><Loader /></section>)

		const aromMenuStruct = aromGroup.map(aromItem => <li key={aromItem.id}>
																												<AromTypeNavItem aromItem={aromItem} aromCat={aromCat} match={match} />
																											</li>)

		return(
			<section className="info">
				
				<h1 className="dark">Применение ароматизаторов</h1>
				
				<p className='uppercase center'>{aromCatName}</p>
				<hr className={aromCat} />
				<ul className='aromStuct'>
					{aromMenuStruct}
				</ul>
				<div className="clear"></div>
				<Route path="/catalogue/:type/:struct?" component={AromItemInfo} />	
			</section>
		)
	}
}


const mapStateToProps = (state) => {
	return {
		aromGroup: state.aromGroup.entities.toArray(),
		aromCatName: state.aromGroup.aromCatName,
		aromCat: state.aromGroup.aromCat,
		loading: state.aromGroup.loading,
		error: state.aromGroup.error 
	}
}

export default connect(mapStateToProps, {loadAromType})(AromType)