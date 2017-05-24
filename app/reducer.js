import settingsReducer from './Settings/reducer'
import { combineReducers } from 'redux'

export default combineReducers({
	settings: settingsReducer
})
