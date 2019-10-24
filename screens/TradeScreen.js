import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image, Alert } from 'react-native';
import MenuButton from '../components/MenuButton';
import SuggestionList from '../containers/SuggestionList';
import Team from '../containers/Team'
import Header from '../components/Header'

class TradeScreen extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      allPlayers: [],
      team1: [],
      team2: [],
      formInput: '',
      player: {},
      selected: false
    }
  }

  componentDidMount() {
    fetch('https://www.fantasyfootballnerd.com/service/auction-enhanced/json/8vtfg7ixpidu/ppr/')
      .then(res => res.json())
      .then(data => {
        this.setState({
          allPlayers: [...data[0].Players],
        })
      })
  }

  renderSuggestions = () => {
    newList = this.state.allPlayers.map(player => player.displayName)
      if(this.state.formInput.length >= 3 && this.state.selected === false){
        nameList = [newList.filter(name => name.includes(this.state.formInput))];
        return (
          <SuggestionList selectSuggestion={this.selectSuggestion} list={nameList}/>
        )
     }
  }

  selectSuggestion = (name) => {
    this.setState({
      formInput: name,
      selected: true
    })
  }

  addToTeam1 = () => {
    player = this.state.allPlayers.find((player) => {
      return player.displayName === this.state.formInput
    });

    if(player){
      this.setState({
        team1: [...this.state.team1, player],
        formInput: ''
      })
    }
  }

  addToTeam2 = () => {
    player = this.state.allPlayers.find((player) => {
      return player.displayName === this.state.formInput
    });

    if(player){
      this.setState({
        team2: [...this.state.team2, player],
        formInput: ''
      })
    }
  }

  renderTeam1 = () => {
    if(this.state.team1[0]){
      return (
      <Team team={this.state.team1}/>
      )
    }
  }

  renderTeam2 = () => {
    if(this.state.team2[0]){
      return (
      <Team team={this.state.team2}/>
      )
    }
  }

  analyzeTrade = () => {
    team1 = this.state.team1;
    team2 = this.state.team2;

    team1ValueArray = this.state.team1.map(player => {
      return player.avgPrice
    });
    team1Value = eval(team1ValueArray.join('+'));

    team2ValueArray = this.state.team2.map(player => {
      return player.avgPrice
    });
    team2Value = eval(team2ValueArray.join('+'));

    if(team1Value > team2Value){ winner = team1; loser = team2} else { winner = team2; loser = team1};
    if(team1Value > team2Value){ win = 'Team A'; lose = 'Team B'} else { win = 'Team B'; lose = 'Team A'};
    console.log(winner)

    Alert.alert(
      `${win}`,
      `The person getting the players on ${win} will have more value for the remainder of the season`,
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }

  reset = () => {
    this.setState ({
      team1: [],
      team2: [],
    })
  }


  render() {
    return (
      <ImageBackground source={require('../assets/backgrounds/Rankingsbackground.jpg')} style={styles.MainContainer}>
        <MenuButton navigation={this.props.navigation}/>
        <Header />

        <Image 
          source={require('../assets/backgrounds/trade.png')}
          style={styles.header}
          />

        <ImageBackground source={require('../assets/backgrounds/black.jpg')} style={styles.addPlayerContainer}>
          <Text style={{fontSize: 16, color: 'white', textAlign: 'center', marginBottom: 2}}>Add a Player</Text>
          <TextInput 
            style={styles.input}
            placeholder='player'
            onChangeText={(text) => {this.setState({formInput: text, selected: false})}}
            value = {this.state.formInput}
            />
          <View style={styles.suggestionBox}>
            {this.renderSuggestions()}
          </View>
          
          <View style={styles.buttonCont}>
            <TouchableOpacity onPress={this.addToTeam1}>
              <Text style={{color: 'lightblue', fontSize: 20, marginBottom: 5, marginTop: 5, borderWidth: 2, borderColor: 'lightblue'}}>
                Add to Team A
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.addToTeam2}>
              <Text style={{color: 'yellow', fontSize: 20, marginBottom: 5, marginTop: 5, borderWidth: 2, borderColor: 'yellow'}}>
                Add to Team B
              </Text>
            </TouchableOpacity>
          </View>

        </ImageBackground>


        <View style={styles.teamsContainer}>
          <ImageBackground source={require('../assets/backgrounds/black.jpg')} style={styles.teamA}>
            <Text style={{color: 'white', textAlign: 'center', borderBottomWidth: 3, borderBottomColor: 'white'}}>Team A</Text>
              {this.renderTeam1()}
          </ImageBackground>

          <ImageBackground source={require('../assets/backgrounds/black.jpg')} style={styles.teamB}>
            <Text style={{color: 'white', textAlign: 'center', borderBottomWidth: 3, borderBottomColor: 'white'}}>Team B</Text>
            {this.renderTeam2()}
          </ImageBackground>
        </View>

        <View style={styles.analyzeCont}>
          <TouchableOpacity onPress={this.analyzeTrade}>
            <Text style={{fontSize: 20}}>
              Analyze Trade
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.resetCont}>
          <TouchableOpacity onPress={this.reset}>
            <Text style={{fontSize: 12}}>
              Reset Trade
            </Text>
          </TouchableOpacity>
        </View>


      </ImageBackground>
    )
  }

}

const styles = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20
  },

  header: {
    height:70,
    width: '100%',
    position: 'absolute',
      left: 0,
      top: 80
  },

  input: {
    width: '100%',    
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10
  },

  button: {
    fontSize: 20,
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 16,
    shadowRadius: 20,
    shadowOpacity: 0.5,
  },

  container: {
    flex: 1,
    paddingTop: 22
   },

   item: {
     padding: 10,
     fontSize: 18,
     height: 44,
   },

   suggestionBox: {
     maxHeight: 40
   },
   
   addPlayerContainer: {
     backgroundColor: 'black',
     flex: 1,
     borderWidth: 1,
     borderColor: 'white',
    marginLeft: 7,
    marginRight: 10,
    height: 300
  },

  buttonCont: {

  },

  analyzeCont: {
    position: 'absolute',
    left: 135,
    top: 530,
    fontSize: 20,
    color: 'black',
    backgroundColor: 'lightgrey',
    padding: 10,
    borderRadius: 50,
    shadowRadius: 20,
    shadowOpacity: 0.5,
  },

  resetCont: {
    position: 'absolute',
    left: 160,
    top: 590,
    fontSize: 20,
    color: 'black',
    backgroundColor: 'lightgrey',
    padding: 10,
    borderRadius: 50,
    shadowRadius: 20,
    shadowOpacity: 0.5,
  },
  
  teamsContainer: {
   flex: 1,
   marginLeft: 10,
   height: 300
  },

  teamA: {
    flex: 1,
    borderWidth: 5,
    borderColor: 'lightblue',
    marginBottom: 15,
    backgroundColor: 'white'
  },

   teamB: {
    flex: 1,
    borderWidth: 5,
    borderColor: 'yellow',
    marginTop: 15
   }
}); 

export default TradeScreen