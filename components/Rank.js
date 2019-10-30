import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Linking} from 'react-native';



class Rank extends Component {

  checkStyle = () => {
    if(this.props.rank % 2 === 0){
      return styles.rankContEven
    } else {
      return styles.rankContOdd
    }
  }

  render() {
    return (
      <View style={this.checkStyle()}>
        <Text style={{flex: 1}}>
          {this.props.rank}.
        </Text>

        <Text style={{flex: 1}}>
          {this.props.player.team} 
        </Text>

        <Text style={{flex: 3, fontSize: 18}}>
          {this.props.player.name}
        </Text>

        <Text style={{flex: 2}}>
          {this.props.player.standard}
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

  rankContEven: {
    backgroundColor: 'lightgrey',
    flexDirection: 'row'
  },

  rankContOdd: {
    backgroundColor: 'white',
    flexDirection: 'row'
  }
});

export default Rank;