import settingsReducer from './Settings/reducer'
import { combineReducers } from 'redux'

let reducer = combineReducers({
	settings: settingsReducer
})

export default reducer