import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking} from 'react-native';
import { connect } from 'react-redux'
import { fetchScores } from '../actions/scoreBoardAction'
import Score from '../components/Score'

class ScoreBoard extends Component {

  componentWillMount(){
    this.props.fetchScores();
  }

  renderScores() {
    return this.props.scores.scores.map(score => {
        return (
          <TouchableOpacity style={styles.scoreContainer} onPress={() => Linking.openURL(`https://www.espn.com/nfl/scoreboard`)}>
            <Score score={score} key={Math.random()} />
          </TouchableOpacity>
        );
    });
  }

  render() {
    if(this.props.scores.scores[0]){
      return this.renderScores();
    }
    else {
      return (
        <View>
          <Text >
            Loading
          </Text>
        </View>
      )
    }
   }

}

function mapStateToProps(state) {
  return {
    scores: state.scores
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchScores: () => fetchScores(dispatch),

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

  scoreContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 10,
    width: 100,
    height: 80,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginLeft: 4
  },
 
  LinkStyle: {
    color: '#E91E63',
    textDecorationLine: 'underline'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoard);