import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking} from 'react-native';
import { connect } from 'react-redux'
import { fetchPlayerNews } from '../actions/playerNewsActions'
import Article from '../components/Article'
import { Divider } from 'react-native-elements';

class PlayersNewsList extends Component {

  componentWillMount(){
    this.props.fetchPlayerNews();
  }

  renderArticles() {
    return this.props.player_news.player_news.map((article, index) => {
        return (
          <View style={styles.article} >
              <Article article={article} key={`-${Math.random()}`} />
          </View>
        );
    });
  }

  render() {
    if(this.props.player_news.player_news[0]){
      return (
        this.renderArticles()
      )
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
    player_news: state.playerNews
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchPlayerNews: () => fetchPlayerNews(dispatch),

  }
}

const styles = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  article: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 10,
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 20,
  },
 
  LinkStyle: {
    color: '#E91E63',
    textDecorationLine: 'underline'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayersNewsList);