import React, { Component } from "react";
import { Button, Text, View, StyleSheet, ImageBackground } from "react-native";
import Modal from "react-native-modal";
 
export default class StartSitModal extends Component {
 
  render() {
    console.log('modal props', this.props)
    var confidence
    const difference = (Number(this.props.winner.ppr)) - (Number(this.props.loser.ppr))
    console.log(difference)
    if(difference >= 7){confidence = 'HIGH'}else if(difference < 3){confidence = 'LOW'}else if(difference < 7 && difference >= 3){confidence = "MEDIUM"}
    return (
        <Modal
          style={styles.MainContainer}
          animationType="slide"
          transparent={false}
          visible={true}
          >
          <View style={styles.MainContainer}>

            <View style={styles.winner}>
              <Text style={{fontSize: 24, color: 'white'}}>{this.props.winner.name}</Text>
              <Text style={{fontSize: 24, color: 'white'}}>Projected Total: {this.props.winner.ppr}</Text>
              <Text style={{fontSize: 24, color: 'white'}}>Position: {this.props.winner.position}</Text>
              <Text style={{fontSize: 24, color: 'white'}}>Injury: {this.props.winner.injury}</Text>

            </View>

            <View style={styles.loser}>
              <Text style={{fontSize: 24, color: 'white'}}>{this.props.loser.name}:</Text>
              <Text style={{fontSize: 24, color: 'white'}}>Projected Total: {this.props.loser.ppr}</Text>
              <Text style={{fontSize: 24, color: 'white'}}>Position: {this.props.loser.position}</Text>
              <Text style={{fontSize: 24, color: 'white'}}>Injury: {this.props.loser.injury}</Text>
            </View>

            <View style={styles.answer}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Results: </Text> 
              <Text style={{fontSize: 30, color: 'green'}}>START {this.props.winner.name}</Text>
              <Text style={{fontSize: 30, color: 'red'}}>SIT {this.props.loser.name}</Text>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>confidence: {confidence}</Text>
            </View>
            <Button title="Close" color={'black'} onPress={this.props.toggleModal} />
          </View>
        </Modal>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer:{
    flex: 1,
  }, 

  answer:{
    flex:2,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  winner: {
    backgroundColor: 'green',
    flex:2,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 20,
    padding: 10
  },

  loser:{
    backgroundColor: 'red',
    flex:2,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 20,
    padding: 10
  }
})