import React, {Component} from 'react';
import Header from './src/components/Header';
import {View, StyleSheet} from 'react-native';
import Post from './src/components/Post';

export default class App extends Component {
  render() {
    const comments = [
      {
        nickname: 'Joanna Helena',
        comment: 'Excelente foto!',
      },
      {
        nickname: 'Rafael Gustavo',
        comment: 'Muito ruim',
      },
    ];

    return (
      <View style={styles.container}>
        <Header />
        <Post image={require('./assets/imgs/fence.jpg')} comments={comments} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
