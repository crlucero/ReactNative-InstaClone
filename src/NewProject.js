import React, { Component } from 'react';
import PostFeed from './components/container/PostFeed';
import { View, Text, StyleSheet } from 'react-native';
import config from './config';

class NewProject extends Component {
  render() {
    return (
      <View style={{ flex: 1, width: 100 + '%', height: 100 + '%' }}>
        <View style={styles.tempNav}>
          <Text style={{ marginTop: 50 }}>INSTAGRAM</Text>
        </View>
        <PostFeed />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tempNav: {
    width: 100 + '%',
    height: 80,
    backgroundColor: 'rgb(250, 250, 250)',
    alignItems: 'center',
    borderBottomColor: 'darkgrey',
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});

export default NewProject;
