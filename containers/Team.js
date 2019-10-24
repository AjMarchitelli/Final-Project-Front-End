import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Player from '../components/Player'

class SuggestionList extends Component {

  renderPlayers = () => {
    if(this.props.team[0]){
      return this.props.team.map(player => {
        return <Player player={player} />
      })
    }
  }

  render() {
    return (
      <View>
        {this.renderPlayers()}
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

  Container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  LinkStyle: {
    color: '#E91E63',
    textDecorationLine: 'underline'
  }
});

export default SuggestionList;