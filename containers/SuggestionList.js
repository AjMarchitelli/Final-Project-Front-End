import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Suggestion from '../components/Suggestion'

class SuggestionList extends Component {

  renderSuggestions = () => {
    if(this.props.list[0]) {
      return this.props.list[0].map((player, index) => {
        return <Suggestion player={player} selectSuggestion={this.props.selectSuggestion} key={Math.random()}/>
      })
    }
  }

  render() {
    if(this.props.list){
      return (
        <ScrollView style={styles.scrollView}>
          {this.renderSuggestions()}
        </ScrollView>
      )
    }
    else {
      return (
        <View>
          <Text >
            No Players found
          </Text>
        </View>
      )
    }
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
  },

  scrollView: {
    marginTop: 1,
  }
});

export default SuggestionList;