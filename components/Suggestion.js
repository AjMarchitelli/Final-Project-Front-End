import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';



class Suggestion extends Component {

  render() {
    return (
      <TouchableOpacity onPress={() => this.props.selectSuggestion(this.props.player)}>
        <Text style={{color: 'white'}}>
          {this.props.player}
        </Text>
      </TouchableOpacity> 
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
})

export default Suggestion;