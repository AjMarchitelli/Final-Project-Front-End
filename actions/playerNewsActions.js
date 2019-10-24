import { FETCH_PLAYER_NEWS } from './types'

export function fetchPlayerNews(dispatch){
  fetch("http://site.api.espn.com/apis/site/v2/sports/football/nfl/news")
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: FETCH_PLAYER_NEWS,
        player_news: data.articles
      })
    })
}