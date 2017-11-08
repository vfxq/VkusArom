import {appName} from '../config'
import {Map, Record} from 'immutable'
import {createSelector} from 'reselect'
import {put, call, takeEvery} from 'redux-saga/effects'
import axios from 'axios'
 

// Constants

export const moduleName = 'form'
const prefix = `${appName}/${moduleName}`
export const SEND_FORM_START = `${prefix}/SEND_FORM_START`
export const SEND_FORM_SUCCESS = `${prefix}/SEND_FORM_SUCCESS`
export const SEND_FORM_ERROR = `${prefix}/SEND_FORM_ERROR`


// Reducer

// Selectors

// Action Creators

export function sendForm(values){
	console.log('values: ', values)

	return {
		type: SEND_FORM_START,
		payload: {values}
	}
}


//Sagas

export function * sendFromSaga(action){
	try {
		const response = yield call(axios.post, '/wp-admin/admin-post.php', action.payload.values)

		yield put({
						type: SEND_FORM_SUCCESS,
						payload: {response}
					})
	} catch (error) {
		
		yield put({
						type: SEND_FORM_ERROR,
						payload: {error}
					})
	}
}

export function * saga() {
	yield takeEvery(SEND_FORM_START, sendFromSaga)
}