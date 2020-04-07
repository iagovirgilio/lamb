import React, {Component} from 'react';
import Header from './src/components/Header';
import {View, Text, StyleSheet} from 'react-native';
import Post from './src/components/Post';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Post image={require('./assets/imgs/fence.jpg')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
