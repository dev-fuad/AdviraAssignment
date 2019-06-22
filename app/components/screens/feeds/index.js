import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

class HomeScreen extends Component {
  state = { }
  render() {
    return (
      <View style={styles.container}>
        <Text>Advira</Text>
      </View>
    );
  }
}

export default HomeScreen;
