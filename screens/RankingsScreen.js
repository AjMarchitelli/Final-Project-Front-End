import React, { Component } from 'react';
import { StyleSheet, Text, ImageBackground, View } from 'react-native';

import MenuButton from '../components/MenuButton';
import RankingsList from '../containers/RankingsList';
import Header from '../components/Header'

class RankingsScreen extends Component {

  render() {
    return (
      <ImageBackground source={require('../assets/backgrounds/clipboard.jpg')} style={styles.MainContainer}>
        <Header />
        <MenuButton navigation={this.props.navigation}/>

        <View style={styles.header}>
          <Text style={{fontSize: 30, marginBottom: 30, marginTop: 90, fontWeight: 'bold'}}>
            Weekly Rankings by Position
          </Text>
        </View>

        <View style={styles.rankingsCont}>
          <RankingsList />
        </View>

      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  header:{
  }, 

  rankingsCont: {
    width: '90%',
    height: '70%',
    paddingRight: 50,
  }
});

export default RankingsScreen