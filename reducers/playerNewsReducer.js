import { FETCH_PLAYER_NEWS } from '../actions/types'

const initialState = {
  player_news: []
}

const playerNewsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PLAYER_NEWS:
      return { player_news: action.player_news }
    default:
      return state
  }
}

export default playerNewsReducer