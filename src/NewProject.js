import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

class NewProject extends Component {
  constructor() {
    super();
    this.state = {
      screenWidth: 0
    };
  }

  componentDidMount() {
    // When comp mounts, get window width and save that with setState
    this.setState({
      screenWidth: Dimensions.get('window').width
    });
  }

  render() {
    return (
      <View style={{ flex: 1, width: 100 + '%', height: 50 + '%' }}>
        <View style={styles.tempNav}>
          <Text>INSTAGRAM</Text>
        </View>
        <View style={styles.userBar}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={styles.userPic}
              source={{
                uri:
                  'https://lh3.googleusercontent.com/DwGErYRwtQCUSTUnlj0hKEhOv8JZaX__sbJVYGyjVYGLnyW3y2rL93S0RoVWb5It03o81RMVEj9p1A5dRypk4y1yEg'
              }}
            />
            <Text style={{ marginLeft: 5 }}> LeBron James</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 30 }}>...</Text>
          </View>
        </View>
        <Image
          style={{ width: this.state.screenWidth, height: 100 }}
          source={{
            uri:
              'https://lh3.googleusercontent.com/BZc9tE_QtLx5EzqBshDqR8yZPZagNdkmWsp4PryantEvW5SrToz5Y1RS6jl1Yma6k7n-4WbN4TJDLuNIgN56PZ1rxg'
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tempNav: {
    width: 100 + '%',
    height: 56,
    marginTop: 30,
    backgroundColor: 'rgb(250, 250, 250)',
    borderBottomColor: 'darkgrey',
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userBar: {
    width: 100 + '%',
    height: 55,
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between'
  },
  userPic: {
    height: 40,
    width: 40,
    borderRadius: 20
  }
});

export default NewProject;
