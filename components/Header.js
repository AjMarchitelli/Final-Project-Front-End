import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Header extends React.Component {
  render() {
    return (
        <View style={styles.header}>
          <Text>Football Buddy</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    zIndex: 9,
    position: 'absolute',
    top: 30,
    left: 300
  },
});