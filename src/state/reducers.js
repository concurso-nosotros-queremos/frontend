import { combineReducers } from 'redux'
import { testReducer } from './test_counter/reducers'

export const rootReducer = combineReducers({ testReducer })
