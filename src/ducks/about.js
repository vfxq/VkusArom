import {appName} from '../config'
import {Map, Record} from 'immutable'
import {createSelector} from 'reselect'
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
	entities: new Map(),
	error: null,
	loading: true,
	loaded: false
})

export default function reducer(state = new ReducerState(), action) {
	const {type, payload} = action

	switch(type){

		case LOAD_ABOUT_SUCCESS:
	 		return state
	 						.set('entities', payload.response)
	 		 				.set('loading', false)
	 		 				.set('loaded', true)
	 			
		case LOAD_ABOUT_ERROR:
	 		return state
	 						.set('error', payload.error)
	 						.set('loading', false)
	 		 				.set('loaded', false)
	}

	return state
}

// Selectors

export const stateSelector = state => state[moduleName]
export const entitiesSelector = createSelector(stateSelector, state => state.entities)
export const loadingSelector = createSelector(stateSelector, state => state.loading)
export const loadedSelector = createSelector(stateSelector, state => state.loaded)
export const errorSelector = createSelector(stateSelector, state => state.error)
export const entitiesDataSelector = createSelector(entitiesSelector, entities => entities.data)

// Action Creators

export function loadAbout(id){
	console.log('Did mount')
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