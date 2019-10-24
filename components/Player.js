import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Linking} from 'react-native';



class Player extends Component {

  render() {
    return (
      <View>
        <Text style={{color: 'white'}}>
          {this.props.player.displayName}
        </Text>
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

export default Player;