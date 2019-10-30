import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import { connect } from 'react-redux'
import Rank from '../components/Rank'

class RankingsList extends Component {

  renderRankings = () => {
    if(this.props.rankings.rankings.Rankings) {
      return this.props.rankings.rankings.Rankings.map((player, index) => {
        return (
          <Rank player={player} rank={index+1} key={`${Math.random()}`} />
        )
      }
    )}
  }

  renderTitle = () => {
    if(this.props.rankings.rankings.Rankings) {
      return <Text style={{fontSize: 20, marginBottom: 15, fontWeight: 'bold'}}>{this.props.rankings.rankings.Position} Rankings for Week {this.props.rankings.rankings.Week}</Text>
    }
  }

  renderLabels = () => {
    if(this.props.rankings.rankings.Rankings) {
      return (
        <View style={styles.labels}>
          <Text style={{flex: 1, textDecorationLine: 'underline'}}>
            Rank
          </Text>

          <Text style={{flex: 1, textDecorationLine: 'underline'}}>
            Team
          </Text>

          <Text style={{flex: 3, textDecorationLine: 'underline'}}>
            Player
          </Text>

          <Text style={{flex: 2, textDecorationLine: 'underline'}}>
            Proj Total
          </Text>
        </View>
      )
    }
  }

  fetchRankings = (url) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.props.dispatch({
          type: 'SET_RANKINGS',
          rankings: data
        })
      })
  }

  // this.props.dispatch({
  //   type: 'SET_USER',
  //   user: this.state

  QBpressHandle = () => {
    url = 'https://www.fantasyfootballnerd.com/service/weekly-rankings/json/8vtfg7ixpidu/QB/'
    this.fetchRankings(url)
  }

  RBpressHandle = () => {
    url = 'https://www.fantasyfootballnerd.com/service/weekly-rankings/json/8vtfg7ixpidu/RB/'
    this.fetchRankings(url)  
  }

  WRpressHandle = () => {
    url = 'https://www.fantasyfootballnerd.com/service/weekly-rankings/json/8vtfg7ixpidu/WR/'
    this.fetchRankings(url) 
  }

  TEpressHandle = () => {
    url = 'https://www.fantasyfootballnerd.com/service/weekly-rankings/json/8vtfg7ixpidu/TE/'
    this.fetchRankings(url) 
  }

  DSTpressHandle = () => {
    url = 'https://www.fantasyfootballnerd.com/service/weekly-rankings/json/8vtfg7ixpidu/DEF/'
    this.fetchRankings(url) 
  }


  render() {
    return (
      <View style={styles.MainContainer}>

        <Text style={{color: 'red', fontWeight:'bold', fontSize: 18, position: 'absolute', left: 30, top: 0}}>Select a Position Below</Text>
        
        <View style={styles.positionContainer}>
          <TouchableOpacity onPress={this.QBpressHandle}>
            <Text style={{marginRight: 30, marginTop: 10, color: 'blue', fontSize: 16}}>QB</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.RBpressHandle}>
            <Text style={{marginRight: 30, marginTop: 10, color: 'blue', fontSize: 16}}>RB</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.WRpressHandle}>
            <Text style={{marginRight: 30, marginTop: 10, color: 'blue', fontSize: 16}}>WR</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.TEpressHandle}>
            <Text style={{marginRight: 30, marginTop: 10, color: 'blue', fontSize: 16}}>TE</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.DSTpressHandle}>
            <Text style={{marginRight: 30, marginTop: 10, color: 'blue', fontSize: 16}}>D/ST</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.scrollView}>
          <ImageBackground source={require('../assets/backgrounds/paper.jpeg')} style={styles.paper}>
            {this.renderTitle()}
            {this.renderLabels()}
            {this.renderRankings()}

          </ImageBackground>
        </ScrollView>

      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    rankings: state.rankings
  }
}

const styles = StyleSheet.create({
 
  MainContainer: {
    justifyContent: 'center'
  },

  positionContainer: {
    marginTop: 25,
    marginBottom: 10,
    flexDirection: 'row',
    height: 30
  },

  paper: {
    
  },

  labels: {
    flexDirection: 'row'
  },

  scrollView: {
    marginTop: 10,
    borderRadius: 20,
    padding: 8,
    marginBottom: 20,
    maxHeight: 390
  },
});

export default connect(mapStateToProps)(RankingsList);