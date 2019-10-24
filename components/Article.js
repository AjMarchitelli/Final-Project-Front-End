import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Linking} from 'react-native';

class Article extends Component {

  renderUrl = () => {
    if(this.props.article.links.mobile){
      return (      
        <Text 
          style={styles.LinkStyle} 
          onPress={ () => Linking.openURL(`${this.props.article.links.mobile.href}`)}>
          {this.props.article.links.mobile.href}
      </Text>
      )
    } else {
      return (<Text alignContent={'bottom'}>No Mobile URL</Text>)
    }
  }

  renderImage = () => {
    if(!this.props.article.images[0]){
      return (<Text>No Image</Text>)
    } else {
      return (        
        <Image
          style={{width: 160, height: 160, paddingTop: 10, marginLeft: 8}}
          source={{uri: this.props.article.images[0].url}} />)
    }
  }

  render() {
    return (
      <View width={180}>
        <Text style={{fontSize: 16, paddingLeft: 8, fontStyle: 'italic', fontWeight: 'bold'}}>
          {this.props.article.headline}
        </Text>

        {this.renderImage()}
      
        {this.renderUrl()}
      </View>
    )
  }

}


const styles = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
 
  LinkStyle: {
 
    color: '#E91E63',
    textDecorationLine: 'underline',
    fontSize: 8,
    justifyContent: 'center',
    paddingLeft: 8
  }
})

export default Article;


