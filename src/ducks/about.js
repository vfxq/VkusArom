import {appName} from '../config'
import {Map, Record} from 'immutable'
import {put, call, takeEvery} from 'redux-saga/effects'
import axios from 'axios'
 

// Constants

export const moduleName = 'about'
const prefix = `${appName}/${moduleName}`
export const LOAD_ABOUT_START = `${prefix}/LOAD_ABOUT_START`
export const LOAD_ABOUT_SUCCESS = `${prefix}/LOAD_ABOUT_SUCCESS`
export const LOAD_ABOUT_ERROR = `${prefix}/LOAD_ABOUT_ERROR`


// Reducer

const ReducerState = Record({
	entities: Map(),
	error: null,
	loading: true
})

export default function reducer(state = new ReducerState(), action) {
	const {type, payload} = action

	switch(type){
		case LOAD_ABOUT_SUCCESS:
	 		return state
	 						.setIn(['entities'], payload.response)
	 		 				.setIn(['loading'], false)
	 			
		case LOAD_ABOUT_ERROR:
	 		return state
	 						.setIn(['error'], payload.error)
	 						.setIn(['loading'], false)
	}

	return state
}


// Action Creators

export function loadAbout(id){
	return {
		type: LOAD_ABOUT_START,
		payload: {id}
	}
}


//Sagas

export function * loadAboutSaga(action){
	try {
		const response = yield call(axios.get, `/wp-json/wp/v2/posts/${action.payload.id}`)

		yield put({
						type: LOAD_ABOUT_SUCCESS,
						payload: {response}
					})
	} catch (error) {
		
		yield put({
						type: LOAD_ABOUT_ERROR,
						payload: {error}
					})
	}
}

export function * saga() {
	yield takeEvery(LOAD_ABOUT_START, loadAboutSaga)
}