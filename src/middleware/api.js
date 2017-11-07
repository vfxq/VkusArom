import $ from 'jquery'
import {START, SUCCESS, FAIL} from '../constants'
import {push, replace} from 'react-router-redux'

export default store => next => action => {
	const {callAPI, type, ...rest} = action

	if(!callAPI) return	next(action)

	next({
		...rest, type: type + START 
	})

	$.get(callAPI)
		.done(response => next({...rest, type: type + SUCCESS, response}))
	 	.fail(error => next({...rest, type: type + FAIL, error}))
}


// WEBPACK FOOTER //
// ./src/middleware/api.js