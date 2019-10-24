
const initialState = {
  rankings: []
}

const rankingsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_RANKINGS':
      return { rankings: action.rankings }
    default:
      return state
  }
}

export default rankingsReducer