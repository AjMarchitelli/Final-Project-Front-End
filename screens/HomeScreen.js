import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';
import PlayersNewsList from '../containers/PlayersNewsList'
import ScoreBoard from '../containers/ScoreBoard'
import MenuButton from '../components/MenuButton'
import Header from '../components/Header'


class HomeScreen extends Component {

  render() {
    return (
      <ImageBackground source={require('../assets/backgrounds/homebackground.jpg')} style={styles.MainContainer}>
        <MenuButton navigation={this.props.navigation}/>
        <Header />

        <View style={styles.scoreBoardContainer}>
          <ScrollView 
            style={styles.scoreBoard} 
            horizontal={true}
            scrollEventThrottle={16}>
              <ScoreBoard />
          </ScrollView>
        </View>

        <Text style={{fontSize: 34, fontWeight: 'bold', marginBottom: 2, fontStyle: 'italic'}}>
          IN THE NEWS
        </Text>
        <ScrollView 
          style={styles.scrollView} 
          horizontal={true}
          scrollEventThrottle={16}>
            <PlayersNewsList />
        </ScrollView>
        
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
    height: '100%',
    width: '100%',
  },

  Title: {
    fontSize: 30,
    marginTop: 10
  },

  scrollView: {
    marginHorizontal: 20,
    maxHeight: 300
  }, 

  scoreBoardContainer: {
    marginBottom: 80,
  },

  scoreBoard: {
    marginHorizontal: 20,
    maxHeight: 100
  }
});

export default HomeScreen