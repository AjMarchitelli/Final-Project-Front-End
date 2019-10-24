import React from 'react';
import { Platform, Dimensions} from 'react-native'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'

import BottomNavigator from './BottomTabNavigation'
import Settings from '../screens/Settings'

import MenuDrawer from '../components/MenuDrawer'

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
  drawerWidth: WIDTH*.83,
  contentComponent: ({ navigation }) => {
    return (<MenuDrawer navigation={navigation}/>)
  }
}

const DrawerNavigator = createDrawerNavigator(
  { 
    Home: {
      screen: BottomNavigator
    },

    Settings: {
      screen: Settings
    }
  }, DrawerConfig, 
)

export default createAppContainer(DrawerNavigator)
