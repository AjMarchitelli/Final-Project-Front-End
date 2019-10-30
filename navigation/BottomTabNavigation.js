import React from 'react';
import { View } from 'react-native'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createAppContainer } from 'react-navigation'

import HomeScreen from '../screens/HomeScreen';
//import LineupScreen from '../screens/LineupScreen';
import RankingsScreen from '../screens/RankingsScreen';
import StartSitScreen from '../screens/StartSitScreen';
import TradeScreen from '../screens/TradeScreen';

import Icon from 'react-native-vector-icons/Ionicons';  

const BottomNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarColor: 'grey',
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (  
          <View>  
              <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
          </View>),
      }
    },
        // Lineup: {
        //  screen: LineupScreen, 
      //     navigationOptions: {
      //       tabBarColor: 'green',
      //       tabBarLabel: 'Lineup',
      //   }},
    Rankings: {
      screen: RankingsScreen,
      navigationOptions: {
        tabBarColor: 'orange',
        tabBarLabel: 'Rankings',
        tabBarIcon: ({ tintColor }) => (  
          <View>  
              <Icon style={[{color: tintColor}]} size={25} name={'ios-stats'}/>  
          </View>),
      }},
    StartSit: {
      screen: StartSitScreen,
      navigationOptions: {
        tabBarColor: 'green',
        tabBarLabel: 'Start Or Sit',
        tabBarIcon: ({ tintColor }) => (  
          <View>  
              <Icon style={[{color: tintColor}]} size={25} name={'ios-git-compare'}/>  
          </View>),
      }},
    Trade: {
      screen: TradeScreen,
      navigationOptions: {
        tabBarColor: 'grey',
        tabBarLabel: 'Trades',
        tabBarIcon: ({ tintColor }) => (  
          <View>  
              <Icon style={[{color: tintColor}]} size={25} name={'ios-swap'}/>  
          </View>),
      }}
  }, {
      initialRouteName: 'Home',
      shifting: true,
      activeColor: 'white',
      // barStyle: {
      //   backgroundColor: 'black',
      //   paddingBottom: 10,
      //   paddingLeft: 20,
      //   paddingTop: 10,
      //   paddingRight: 20,
      //   overflow: 'hidden'
    // },
  }
)
        
        
export default createAppContainer(BottomNavigator)