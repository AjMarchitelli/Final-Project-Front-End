import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, Image} from 'react-native';
import Button from 'react-native-button'
import MenuButton from '../components/MenuButton'
import SuggestionList from '../containers/SuggestionList'
import Header from '../components/Header';
import StartSitModal from '../components/StartSitModal'

class StartSitScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      allPlayers: [],
      formInput1: '',
      formInput2: '',
      winner: {},
      loser: {},
      isModalVisible: false,
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

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  renderSuggestions1 = () => {
    newList = this.state.allPlayers.map(player => player.displayName)
      if(this.state.formInput1.length >= 3 && this.state.selected === false){
        nameList = [newList.filter(name => name.includes(this.state.formInput1))];
        return (
          <SuggestionList selectSuggestion={this.selectSuggestion1} list={nameList}/>
        )
     }
  }

  renderSuggestions2 = () => {
    newList = this.state.allPlayers.map(player => player.displayName)
    if(this.state.formInput2.length >= 3 && this.state.selected === false){
      nameList = [newList.filter(name => name.includes(this.state.formInput2))];
      return (
        <SuggestionList selectSuggestion={this.selectSuggestion2} list={nameList}/>
      )
   }
}

  selectSuggestion1 = (name) => {
    this.setState({
      formInput1: name,
      selected: true
    })
  }

  selectSuggestion2 = (name) => {
    this.setState({
      formInput2: name,
      selected: true
    })
  }

  analyzeMatchup = () => {
    var winner; var loser; var player1; var player2; var player1Obj; var player2Obj;
    if(this.state.formInput1.length > 1 && this.state.formInput2.length > 1){

    player1 = this.state.allPlayers.find((player) => {
      return player.displayName === this.state.formInput1
    })
    player2 = this.state.allPlayers.find((player) => {
      return player.displayName === this.state.formInput2
    })
    if(player1.position !== player2.position){
      alert('players must be same position to analyze')
    } else if(player2.position) {
      fetch(`https://www.fantasyfootballnerd.com/service/weekly-rankings/json/8vtfg7ixpidu/${player2.position}/`)
        .then(res => res.json())
        .then(data => {
          player1Obj = data.Rankings.find((player) => {return player.playerId === player1.playerId});
          player2Obj = data.Rankings.find((player) => {return player.playerId === player2.playerId});
          player1Total = Number(player1Obj.ppr);
          player2Total = Number(player2Obj.ppr);
          if(player1Total > player2Total){ winner = player1Obj; loser = player2Obj} else if(player1Total <= player2Total){  winner = player2Obj; loser = player1Obj};
          this.setState({
            winner: winner,
            loser: loser,
            isModalVisible: true,
          })
        })  
    }
  }
  }

  render() {
    if(this.state.isModalVisible){
      return (
          <StartSitModal 
            toggleModal={this.toggleModal}
            winner={this.state.winner}
            loser={this.state.loser}
            />
      )
    }
    return (
      <ImageBackground opacity={0.8} source={require('../assets/backgrounds/4.jpeg')} style={styles.MainContainer}>
        
        <MenuButton navigation={this.props.navigation}/>
        <Header />

        <Text style={{fontSize: 60, fontWeight: 'bold', color: 'green', textShadowColor:'#585858', textShadowOffset:{width: 5, height: 5}, textShadowRadius:10}}>Start</Text>
        <Text style={{fontSize: 20}}>Or</Text>
        <Text style={{fontSize: 60, fontWeight: 'bold', color: 'red', textShadowColor:'#585858', textShadowOffset:{width: 5, height: 5}, textShadowRadius:10}}>Sit</Text>

        <TextInput 
          style={styles.input}
          placeholder='player 1'
          onChangeText={(text) => {this.setState({formInput1: text, selected: false})}}
          value = {this.state.formInput1}
          />
        <View style={styles.suggestionBox}>
          {this.renderSuggestions1()}
        </View>

        <TextInput 
          style={styles.input}
          placeholder='player 2'
          onChangeText={(text) => {this.setState({formInput2: text, selected: false})}}
          value = {this.state.formInput2}
          />
        <View style={styles.suggestionBox}>
          {this.renderSuggestions2()}
        </View>

          <Button style={styles.button}
              onPress={() => this.analyzeMatchup()}>
                Analyze
          </Button>

          <View style={styles.imageContainer}>
              <Image 
                style={styles.upImg}
                source={require('../assets/backgrounds/up.png')}/>
              <Image 
                style={styles.downImg}
                source={require('../assets/backgrounds/downnn.png')}/>
          </View>

      </ImageBackground>
    )
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
    color: 'grey'
  },

  input: {
    width: '90%',    
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10
  },

  button: {
    fontSize: 20,
    color: 'black',
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 50,
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

   imageContainer: {
     flexDirection: 'row',
     width: '100%',
   },

   downImg: {
    height: 170,
    width: 170,
    marginLeft: 10,
    resizeMode: 'contain',
    transform: [{rotate: '325deg'}],
    position: 'absolute', right: 40, bottom: 60
   },

   upImg: {
    height: 250,
    marginRight: 10,
    width: 180,
    padding: 10,
    resizeMode: 'contain',
    transform: [{ rotate: '330deg' }],
    position: 'relative', left: 30
   },

   modal:{
     height: 200
   },
});

export default StartSitScreen