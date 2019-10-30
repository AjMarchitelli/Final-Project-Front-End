import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Provider } from 'react-redux'
import store from './store.js'
import DrawerNavigator from './navigation/DrawerNavigation'
import LogIn from './screens/LogIn'

console.disableYellowBox = true

class App extends Component {

  state = {
    currentUser: false
  }

  logIn = () => {
    this.setState({
      currentUser: true
    })
  }

  logOut = () => {
    this.setState({
      currentUser: false
    })
  }

  render() {
    if(this.state.currentUser === true){
      return (
        <Provider store={store}>
          <DrawerNavigator />
          <TouchableOpacity onPress={() => this.logOut()}>
            <Text>Log Out</Text>
          </TouchableOpacity>
        </Provider>
      )
    } else {
      return (
        <Provider store={store}>
          <LogIn logIn={this.logIn}/>
        </Provider>
      )
    }}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App