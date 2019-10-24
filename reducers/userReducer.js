import { SET_USER } from '../actions/types'

const initialState = {
  user: {}
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER:
      return {
        user: {
          name: action.user.logname,
          password: action.user.logpass,
          favoriteTeam: action.user.favorite_team
        }
      }
    default:
      return state
  }
}

export default userReducer