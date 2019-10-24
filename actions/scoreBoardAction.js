import { FETCH_SCORES } from './types'

export function fetchScores(dispatch){
  fetch("http://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard")
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: FETCH_SCORES,
        scores: data.events
      })
    })
}