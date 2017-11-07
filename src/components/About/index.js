import React, {Component} from 'react'
import {connect} from 'react-redux'
import {loadAbout, loadingSelector, entitiesSelector, errorSelector, loadedSelector } from '../../ducks/about'
import Loader from '../Loader'
import renderHTML from 'react-render-html'
import ErrorCmp from '../ErrorCmp'
import {ABOUT} from '../../config'

class About extends Component{

	componentDidMount(){
		this.props.loadAbout(ABOUT)
	}

	render(){
		const {entities, loading, error} = this.props
		
		if (loading) return (<section className="about"><div className="white"><Loader /></div></section>)
		if (error) return (<section className="about"><ErrorCmp error={error} /></section>)														
	
		return (
			<section className="about"> 
				<div>
					<h1 className="white">
					 	{entities.data.title.rendered}
					 </h1>
					<div className="text white">
						{renderHTML(entities.data.content.rendered)}
					</div> 
				</div>
			</section>
		)
	}
}


const mapStateToProps = (state) => {

	return {
		entities: entitiesSelector(state),
		loading: loadingSelector(state),
		error: errorSelector(state)
	}
}

export default connect(mapStateToProps, {loadAbout})(About)