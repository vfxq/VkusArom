import {all} from 'redux-saga/effects'
import {saga as menuSaga} from '../ducks/menu'
import {saga as newsSaga} from '../ducks/news'
import {saga as aboutSaga} from '../ducks/about'
import {saga as vendorsSaga} from '../ducks/vendors'
import {saga as distribsSaga} from '../ducks/distribs'
import {saga as contsactsSaga} from '../ducks/contacts'
import {saga as aromGroupSaga} from '../ducks/aromGroup'
import {saga as fullAssortimentSaga} from '../ducks/fullAssortiment'

export default function * () {
	yield all([
		menuSaga(),
		aboutSaga(),
		newsSaga(),
		contsactsSaga(),
		aromGroupSaga(),
		vendorsSaga(),
		distribsSaga(),
		fullAssortimentSaga()
	])
} 