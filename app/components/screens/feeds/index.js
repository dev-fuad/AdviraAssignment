import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import Navbar from '../../custom/Navbar';

class HomeScreen extends Component {
  user = {
    id: 3,
    name: 'Kattie Pearson',
    image: 'https://randomuser.me/api/portraits/women/50.jpg',
  };

  render() {
    return (
      <View style={styles.container}>
        <Navbar {...this.user} />
        <Text>Advira</Text>
      </View>
    );
  }
}

export default HomeScreen;
