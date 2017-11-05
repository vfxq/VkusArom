import React, {Component} from 'react'
import {connect} from 'react-redux'
import Loader from '../Loader'
import Error from '../Error'
import {errorSelector, entitiesSelector, loadingSelector, loadedSelector} from '../../ducks/contacts'

class Phone extends Component{
	render(){

		const {contacts, loading, error} = this.props

		if (loading || !contacts) return <Loader />
		if (error) return <Error error={error} />		

		const phone = contacts.acf.phone1

		return(
			<p><i className="fa fa-phone green_light" />
			{phone}
			</p>
		)
	}
}

const mapStateToProps = (state) => {

	return {
		contacts: entitiesSelector(state), 
		loading: loadingSelector(state),
		error: errorSelector(state)
	}
}

export default connect(mapStateToProps)(Phone)