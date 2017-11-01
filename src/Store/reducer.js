import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import menuReducer, {moduleName as menuModule} from '../ducks/menu'
import newsReducer, {moduleName as newsModule} from '../ducks//news'
import contactsReducer, {moduleName as contactsModule} from '../ducks/contacts'
import distribsReducer, {moduleName as distribsModule}  from '../ducks/distribs'
import aromGroupReducer, {moduleName as aromGroupModule} from '../ducks/aromGroup'
import aboutReducer, {moduleName as aboutModule} from '../ducks/about'
import vendorsReducer, {moduleName as vendorsModule} from '../ducks/vendors'
import fullAssortimentReducer, {moduleName as fullAssortimentModule} from '../ducks/fullAssortiment'

export default combineReducers({
	[menuModule]: menuReducer,
	[newsModule]: newsReducer,
	[aromGroupModule]: aromGroupReducer,
	[aboutModule]: aboutReducer,
	[vendorsModule]: vendorsReducer, 
	[fullAssortimentModule]: fullAssortimentReducer,
	[distribsModule]: distribsReducer,
	[contactsModule]: contactsReducer,
	form: formReducer
})