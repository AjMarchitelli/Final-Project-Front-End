import { combineReducers } from 'redux';
import playerNewsReducer from "./playerNewsReducer";
import scoreBoardReducer from './scoreBoardReducer';
import userReducer from './userReducer'
import rankingsReducer from './rankingsReducer'

const rootReducer = combineReducers({
  playerNews: playerNewsReducer,
  scores: scoreBoardReducer,
  user: userReducer,
  rankings: rankingsReducer
})

export default rootReducer;