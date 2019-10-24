import React from 'react';
import { View, Text, Platform, Dimensions, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

class MenuDrawer extends React.Component {
  
  navLink(nav, text){
    return(
      <TouchableOpacity style={{height: 50}} onPress={() => this.props.navigation.navigate(nav)}>
        <Text style={styles.link}>{text}</Text>
      </TouchableOpacity>
    )
  }

  imageSelect = () => {
    switch(this.props.user.user.favoriteTeam) {
      case 'Titans':
        return require('../assets/teams/Titans.png')
      case 'Cardinals':
        return require('../assets/teams/Cardinals.png')
      case 'Bears':
        return require('../assets/teams/Bears.png')
      case 'Bengals':
        return require('../assets/teams/Bengals.png')
      case 'Bills':
        return require('../assets/teams/Bills.png')
      case 'Broncos':
          return require('../assets/teams/Broncos.png')
      case 'Browns':
        return require('../assets/teams/Browns.png')
      case 'Buccaneers':
        return require('../assets/teams/Buccaneers.png')
      case 'Chargers':
        return require('../assets/teams/Chargers.png')
      case 'Cheifs':
        return require('../assets/teams/Cheifs.png')
      case 'Colts':
        return require('../assets/teams/Colts.png')
      case 'Cowboys':
        return require('../assets/teams/Cowboys.png')
      case 'Dolphins':
        return require('../assets/teams/Dolphins.png')
      case 'Eagles':
        return require('../assets/teams/Eagles.png')
      case 'Falcons':
          return require('../assets/teams/Falcons.png')
      case '49ers':
        return require('../assets/teams/49ers.png')
      case 'Giants':
        return require('../assets/teams/Giants.png')
      case 'Jaguars':
        return require('../assets/teams/Jaguars.png')
      case 'Jets':
        return require('../assets/teams/Jets.png')
      case 'Lions':
        return require('../assets/teams/Lions.png')
      case 'Packers':
        return require('../assets/teams/Packers.png')
      case 'Bengals':
        return require('../assets/teams/Bengals.png')
      case 'Panthers':
        return require('../assets/teams/Panthers.png')
      case 'Patriots':
          return require('../assets/teams/Patriots.png')
      case 'Raiders':
        return require('../assets/teams/Raiders.png')
      case 'Rams':
        return require('../assets/teams/Rams.png')
      case 'Ravens':
        return require('../assets/teams/Ravens.png')
      case 'Redskins':
        return require('../assets/teams/Redskins.png')
      case 'Saints':
        return require('../assets/teams/Saints.png')      
      case 'Seahawks':
        return require('../assets/teams/Seahawks.png')      
      case 'Steelers':
        return require('../assets/teams/Steelers.png')      
      case 'Texans':
        return require('../assets/teams/Texans.png')
      case 'Vikings':
        return require('../assets/teams/Vikings.png')
    }
  }

  backgroundColor = () => {
    switch(this.props.user.user.favoriteTeam) {
      case 'Giants':
      case 'Bills':
      case 'Colts':
      case 'Cowboys':
        return 'blue'
      case 'Rams':
      case 'Lions':
      case 'Dolphins':
      case 'Panthers':
      case 'Chargers':
      case 'Titans':
          return 'lightblue'
      case 'Seahawks':
      case 'Patriots':
      case 'Texans':
        return 'darkblue'
      case 'Cardinals':
      case 'Redskins':
      case '49ers':
      case 'Falcons':
      case 'Cheifs':
      case 'Buccaneers':
        return 'red'
      case 'Bears':
      case 'Broncos':
      case 'Bengals':
        return 'orange'
      case 'Vikings':
      case 'Ravens':
        return 'purple'
      case 'Raiders':
      case 'Saints':
      case 'Steelers':
        return 'black'
      case 'Jets':
      case 'Packers':
      case 'Jaguars':
      case 'Eagles':
        return 'green'
      case 'Browns':
        return 'brown'
    }
  }


  render() {

    const teamImage = this.imageSelect();
    const teamColor = this.backgroundColor();

    return (
      <View style={styles.container}>
        <View style={{height: 200, backgroundColor: teamColor}}>
          <View style={styles.profile}>
            <View style={styles.imgView}>
              <Image
                style={styles.img}
                source={teamImage}
                />
            </View>

            <View style={styles.profileText}>
              <Text style={styles.name}>{this.props.user.user.name}</Text>
            </View>
          </View>
        </View>

        <View style={styles.bottomLink}>
          {this.navLink('Home', 'Home')}
          {this.navLink('Settings', 'Settings')}
        </View>

        <View style={styles.footer}>
          <Text style={{ flex: 1, margin: 1, fontSize: 16, color: teamColor}}>Logged In As: {this.props.user.user.name}</Text>
          <Text style={{ flex: 1, margin: 1, fontSize: 16, color: teamColor}}>Favorite Team: {this.props.user.user.favoriteTeam}</Text>
        </View>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },

  link: {
    flex: 1,
    fontSize: 20,
    padding: 6,
    paddingLeft: 14,
    margin: 5,
    textAlign: 'left',
  },

  profileText: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  name: {
    fontSize: 30,
    paddingBottom: 5,
    paddingLeft: 10, 
    color: 'white',
    textAlign: 'left'
  },

  profile: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#777777'
  },

  img: {
    height: 90,
    width: 90,
    // borderRadius: 10,
    // borderWidth: 2,
    // borderColor: 'white',
    resizeMode: 'contain'
  },
 
  imgView: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },

  bottomLink: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 450
  },

  footer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'blue'
  },

  footerText: {
    flex: 1,
    margin: 1,
    fontSize: 16
  }
})

export default connect(mapStateToProps)(MenuDrawer);




