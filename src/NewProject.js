import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class NewProject extends Component {
  render() {
    return (
      <View style={{ flex: 1, width: 100 + '%', height: 50 + '%' }}>
        <View style={styles.tempNav} />

        {/* Use uri when uploading from remote images */}
        <Image
          style={{ width: 100 + '%', height: 100 }}
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
    height: 100,
    backgroundColor: 'rgb(250, 250, 250)'
  }
});

export default NewProject;
