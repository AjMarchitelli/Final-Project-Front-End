import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, Picker, ImageBackground } from 'react-native';
import { setUser } from '../actions/userAction'
import { connect } from 'react-redux'


class LogIn extends Component {

  constructor(props) {
    super(props)
    this.state = {
      logname: '',
      logpass: '',
      favorite_team: 'Titans',
    }
  }

  // signUp = () => {
  //   fetch('http://localhost:3000/users',{
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accepts': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       name: this.state.name,
  //       password: this.state.password,
  //       favorite_team: this.state.favorite_team
  //     })
  //   }).then(res => res.json())
  //     .then(console.log)
  // }

    logIn = () => {
      this.props.dispatch({
        type: 'SET_USER',
        user: this.state
      });
      if(this.props.user){
        this.props.logIn();
      }
    }


  render() {
    return (
      <ImageBackground source={require('../assets/backgrounds/LogInBackground.jpg')} style={{width: '100%', height: '100%'}}>
        <View style={styles.MainContainer}>

          <StatusBar backgroundColor='#1e90ff' barStyle='light-content'/>

          <Text style={styles.welcome}>Football Buddy</Text>
          <TextInput 
            style={styles.input}
            placeholder='Name'
            name={'logname'}
            value={this.state.logname}
            onChangeText={(text) => {this.setState({logname: text})}}
            />
          {/* <TextInput 
            style={styles.input}
            placeholder='password'
            secureTextEntry
            onChangeText={(text) => {this.setState({logpass: text})}}
            value={this.state.logpass}
            /> */}


          {/* <Text style={styles.welcome}>Sign Up</Text>
          <TextInput 
            style={styles.input}
            placeholder='Name'
            onChangeText={(text) => {this.setState({name: text})}}
            value={this.state.name}
            /> */}

          {/* <TextInput 
            style={styles.input}
            placeholder='password'
            secureTextEntry
            /> */}

          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => this.logIn()}>
            <Text style={styles.buttonTxt}>Log In</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity style={styles.button} onPress={this.signUp}>
            <Text style={styles.buttonTxt}>Sign Up</Text>
          </TouchableOpacity> */}
          </View>


          <Text style={{fontSize:30}}>Pick A Favorite Team</Text>
          <Picker
            selectedValue={this.state.favorite_team}
            style={{height: 10, width: 100}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({favorite_team: itemValue})}>
            <Picker.Item color='white' label="Bears" value="Bears" />
            <Picker.Item color='white' label="Bengals" value="Bengals" />
            <Picker.Item color='white' label="Bills" value="Bills" />
            <Picker.Item color='white' label="Broncos" value="Broncos" />
            <Picker.Item color='white' label="Browns" value="Browns" />
            <Picker.Item color='white' label="Buccaneers" value="Buccaneers" />
            <Picker.Item color='white' label="Cardinals" value="Cardinals" />
            <Picker.Item color='white' label="Chargers" value="Chargers" />
            <Picker.Item color='white' label="Chiefs" value="Chiefs" />
            <Picker.Item color='white' label="Colts" value="Colts" />
            <Picker.Item color='white' label="Cowboys" value="Cowboys" />
            <Picker.Item color='white' label="Dolphins" value="Dolphins" />
            <Picker.Item color='white' label="Eagles" value="Eagles" />
            <Picker.Item color='white' label="Falcons" value="Falcons" />
            <Picker.Item color='white' label="49ers" value="49ers" />
            <Picker.Item color='white' label="Giants" value="Giants" />
            <Picker.Item color='white' label="Jaguars" value="Jaguars" />
            <Picker.Item color='white' label="Jets" value="Jets" />
            <Picker.Item color='white' label="Lions" value="Lions" />
            <Picker.Item color='white' label="Packers" value="Packers" />
            <Picker.Item color='white' label="Panthers" value="Panthers" />
            <Picker.Item color='white' label="Patriots" value="Patriots" />
            <Picker.Item color='white' label="Raiders" value="Raiders" />
            <Picker.Item color='white' label="Rams" value="Rams" />
            <Picker.Item color='white' label="Ravens" value="Ravens" />
            <Picker.Item color='white' label="Redskins" value="Redskins" />
            <Picker.Item color='white' label="Saints" value="Saints" />
            <Picker.Item color='white' label="Seahawks" value="Seahawks" />
            <Picker.Item color='white' label="Steelers" value="Steelers" />
            <Picker.Item color='white' label="Texans" value="Texans" />
            <Picker.Item color='white' label="Titans" value="Titans" />
            <Picker.Item color='white' label="Vikings" value="Vikings" />
          </Picker>


        </View>
      </ImageBackground>
    )
  }

}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

const styles = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
  },

  welcome: {
    fontSize: 50,
    color: 'white',
    fontStyle: 'italic',
    marginBottom: 50
  },

  input: {
    width: '90%',    
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '90%',
    marginBottom: 15
  },

  button: {
    backgroundColor: 'brown',
    borderRadius: 50,
    padding: 15,
    width: '45%',
    alignContent: 'center'
  },

  buttonTxt: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white'
  },
});

export default connect(mapStateToProps)(LogIn)