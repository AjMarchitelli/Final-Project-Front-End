import { FETCH_SCORES } from '../actions/types'

const initialState = {
  scores: []
}

const scoreBoardReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_SCORES:
      return { scores: action.scores }
    default:
      return state
  }
}

export default scoreBoardReducer