import {appName} from '../config'
import {Map, Record} from 'immutable'
import {put, call, takeEvery} from 'redux-saga/effects'
import {createSelector} from 'reselect'
import axios from 'axios'
import {arrToMap} from './utils'
 

// Constants

export const moduleName = 'menu'
const prefix = `${appName}/${moduleName}`
export const LOAD_MENU_START = `${prefix}/LOAD_MENU_START`
export const LOAD_MENU_SUCCESS = `${prefix}/LOAD_MENU_SUCCESS`
export const LOAD_MENU_ERROR = `${prefix}/LOAD_MENU_ERROR`


// Reducer

const MenuModel = Record({
	'id': null,
	'classes': null,
	'children': [],
	'order': null,
	'parent': null,
	'title': null,
	'url': null
})

const ReducerState = Record({
	entities: new Map(),
	loaded: false,
	loading: false,
	error: null
})

export default (state = new ReducerState(), action) => {
	const {type, payload, error} = action

	switch (type) {

		case LOAD_MENU_START:
			return state
							.set('loading', true)
							.set('loaded', false)
		case LOAD_MENU_SUCCESS:
		 	return state
		 					.set('loading', false)
		 					.set('entities', arrToMap(payload.response.data.items, MenuModel))
		 					.set('loaded', true)
			
		case LOAD_MENU_ERROR:
			return state
							.set('loading', false)
							.set('error', error)
	}
	
	return state
}

// Selectors

export const stateSelector = state => state[moduleName]
export const entitiesSelector = createSelector(stateSelector, state => state.entities)
export const loadingSelector = createSelector(stateSelector, state => state.loading)
export const loadedSelector = createSelector(stateSelector, state => state.loaded)
export const errorSelector = createSelector(stateSelector, state => state.error)
export const entitiesDataSelector = createSelector(entitiesSelector, entities => entities.valueSeq().toArray())

// Action Creators

export function loadMenu(id){
	return {
		type: LOAD_MENU_START,
		payload: {id}
	}
}

// Sagas

export function * menuSaga(action){

	try {
		const response = yield call(axios.get, `/wp-json/wp-api-menus/v2/menus/${action.payload.id}`)

		yield put({
						type: LOAD_MENU_SUCCESS,
						payload: {response}
					})
	} catch (error) {
		
		yield put({
						type: LOAD_MENU_ERROR,
						payload: {error}
					})
	}
}

export function * saga() {
	yield takeEvery(LOAD_MENU_START, menuSaga)
}