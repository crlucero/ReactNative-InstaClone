import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import config from './config';

class NewProject extends Component {
  constructor() {
    super();
    this.state = {
      screenWidth: Dimensions.get('window').width
    };
  }

  render() {
    const imageHeight = Math.floor(this.state.screenWidth * 1.1);
    const imageUri =
      'https://lh3.googleusercontent.com/BZc9tE_QtLx5EzqBshDqR8yZPZagNdkmWsp4PryantEvW5SrToz5Y1RS6jl1Yma6k7n-4WbN4TJDLuNIgN56PZ1rxg' +
      '=s' +
      imageHeight +
      '-c';

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
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {/* DM USER BUTTON */}
            <Image
              style={[styles.icon, { height: 25, width: 25, marginRight: 20 }]}
              source={config.images.arrowIcon}
            />
            <Text style={{ fontSize: 30, marginBottom: 15 }}>...</Text>
          </View>
        </View>
        <Image
          style={{
            width: this.state.screenWidth,
            height: 400
          }}
          source={{
            uri: imageUri
          }}
        />
        <View style={styles.iconBar}>
          {/* LIKE BUTTON */}
          <Image
            style={[styles.icon, { height: 32, width: 32, marginLeft: 10 }]}
            source={config.images.heartIcon}
          />
          {/* COMMENT BUTTON */}
          <Image
            style={[styles.icon, { height: 28, width: 28, marginTop: 11 }]}
            source={config.images.chatIcon}
          />
          {/* SEND POST BUTTON */}
          <Image
            style={[styles.icon, { height: 23, width: 23, marginTop: 14 }]}
            source={config.images.airplaneIcon}
          />
          {/* BOOKMARK BUTTON */}
          <Image
            style={[
              styles.icon,
              {
                height: 27,
                width: 27,
                marginTop: 14,
                marginLeft: 210
              }
            ]}
            source={config.images.bookmarkIcon}
          />
        </View>
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
    height: config.styleConstants.rowHeight,
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between'
  },
  userPic: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  iconBar: {
    height: config.styleConstants.rowHeight,
    width: 100 + '%',
    borderColor: 'darkgrey',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row'
  },
  icon: {
    marginVertical: 9,
    marginLeft: 18
  }
});

export default NewProject;
