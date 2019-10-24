import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import MenuButton from '../components/MenuButton'

class Settings extends Component {

  render() {
    return (
      <View style={styles.MainContainer}>
        <MenuButton navigation={this.props.navigation}/>
        <Text >
          Settings Page 
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

export default Settings