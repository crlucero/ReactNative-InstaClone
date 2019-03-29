import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import config from '../../config';

class Post extends Component {
  constructor() {
    super();
    this.state = {
      liked: false,
      screenWidth: Dimensions.get('window').width
    };
  }

  likeToggled() {
    this.setState({
      liked: !this.state.liked
    });
  }

  render() {
    const imageHeight = Math.floor(this.state.screenWidth * 1.1);
    const imageSelection =
      this.props.item % 2 === 0
        ? 'https://lh3.googleusercontent.com/UTx_tKDeJhbt4ryb5l05mIb3_33xI2e5h8RVcQlOtSGy0jwnwELYSx8YsHhbHNreKGkmQOD0Z9M5aMEt5JqMH88MhF4'
        : 'https://lh3.googleusercontent.com/BZc9tE_QtLx5EzqBshDqR8yZPZagNdkmWsp4PryantEvW5SrToz5Y1RS6jl1Yma6k7n-4WbN4TJDLuNIgN56PZ1rxg';
    const imageUri = imageSelection + '=s' + imageHeight + '-c';
    // If picture is clicked, change heartIconColor to red
    const heartIconColor = this.state.liked ? 'rgb(178,34,34)' : null;

    return (
      <View style={{ flex: 1, width: 100 + '%' }}>
        <View style={styles.userBar}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={styles.userPic}
              source={{
                uri:
                  'https://lh3.googleusercontent.com/DwGErYRwtQCUSTUnlj0hKEhOv8JZaX__sbJVYGyjVYGLnyW3y2rL93S0RoVWb5It03o81RMVEj9p1A5dRypk4y1yEg'
              }}
            />
            <Text style={[styles.userName, { marginLeft: 5 }]}> kingjames</Text>
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
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            this.likeToggled();
          }}
        >
          <Image
            style={{
              width: this.state.screenWidth,
              height: 400
            }}
            source={{
              uri: imageUri
            }}
          />
        </TouchableOpacity>
        <View style={styles.iconBar}>
          {/* LIKE BUTTON */}
          <Image
            style={[
              styles.icon,
              {
                height: 30,
                width: 30,
                marginLeft: 10,
                tintColor: heartIconColor
              }
            ]}
            source={config.images.heartIcon}
          />
          {/* COMMENT BUTTON */}
          <Image
            style={[styles.icon, { height: 25, width: 25, marginTop: 11 }]}
            source={config.images.chatIcon}
          />
          {/* SEND POST BUTTON */}
          <Image
            style={[styles.icon, { height: 20, width: 20, marginTop: 15 }]}
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
        <View>
          <Text style={styles.userName}>12,746 likes</Text>
          <Text style={[styles.userName, { margin: 5 }]}>
            kingjames
            <Text style={{ fontWeight: 'normal' }}>
              This is my new puppy. His name is Tom Brady and he is a Golden
              Retriever.
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userBar: {
    marginTop: 5,
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
    flexDirection: 'row'
  },
  icon: {
    marginVertical: 9,
    marginLeft: 19
  },
  userName: {
    fontWeight: '600',
    fontSize: 13,
    marginLeft: 14
  }
});

export default Post;
