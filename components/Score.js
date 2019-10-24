import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Linking} from 'react-native';



class Score extends Component {

  renderClock = () => {
    if(!this.props.score.competitions[0].status.type.completed){
      return (
        <Text style={{fontSize: 12, textAlign: 'center'}}>
          period: {this.props.score.competitions[0].status.period}  {this.props.score.competitions[0].status.displayClock}
        </Text>
      )
    } else {
      return <Text style={{fontSize: 12, color: 'red'}}>Final</Text>
    }
  }

  render() {
    const game = this.props.score.competitions[0]
    const home = game.competitors.filter(team => team.homeAway === 'home') 
    const homeTeam = home[0]
    const away = game.competitors.filter(team => team.homeAway === 'away')
    const awayTeam = away[0]
    console.log(this.props.score)
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: this.props.score.competitions[0].status.type.completed ? 0.3 : 1.0
      }}>
        {this.renderClock()}
        <Text style={{color: awayTeam.score > homeTeam.score ? 'green' : 'black', fontSize: 14}}>{awayTeam.team.abbreviation}: {awayTeam.score} </Text>
        <Text>{' @ '} </Text>
        <Text style={{color: awayTeam.score < homeTeam.score ? 'green' : 'black', fontSize: 14}}> {homeTeam.team.abbreviation}: {homeTeam.score} </Text>
      </View>
    )
  }

}


const styles = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
 
  LinkStyle: {
 
    color: '#E91E63',
    textDecorationLine: 'underline'
  }
});

export default Score;