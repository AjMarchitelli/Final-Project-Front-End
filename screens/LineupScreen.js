import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import MenuButton from '../components/MenuButton'
import Header from '../components/Header'

class LineupScreen extends Component {

  render() {
    return (
      <View style={styles.MainContainer}>
         <Header />
        <MenuButton navigation={this.props.navigation}/>
        <Text >
          LineupScreen Page 
        </Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20
  },
});

export default LineupScreen