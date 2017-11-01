import React, {Component} from 'react'
import {connect} from 'react-redux'
import Loader from '../Loader'
import Error from '../Error'

class Phone extends Component{
	render(){

		const {contacts, loading, error} = this.props

		if (loading || !contacts) return <Loader />
		if (error) return <Error error={error} />		
		
		const phone = contacts.phone1

		return(
			<p><i className="fa fa-phone green_light" />
			{phone}
			</p>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		contacts: state.contacts.entities.acf, 
		loading: state.contacts.loading,
		error: state.contacts.error
	}
}

export default connect(mapStateToProps)(Phone)