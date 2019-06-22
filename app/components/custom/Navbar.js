import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';

import { statusBarHeight, vh, vw } from '../../utilities/Dimensions';

const NAVBAR_HEIGHT = vh(12);

const styles = StyleSheet.create({
  container: {
    maxWidth: vw(100),
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FFF',
    paddingTop: statusBarHeight,
    height: NAVBAR_HEIGHT + statusBarHeight,

    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#0008',
  },
  image: {
    height: vh(8),
    width: vh(8),
    margin: 5,
    marginLeft: 20,
    borderRadius: vh(4),
    borderColor: '#CCC',
    borderWidth: 2,
  },
  title: {
    fontSize: 18,
  },
});

type P = {
  name: String,
  image: String,
};

const Navbar = ({ name, image }: P) => (
  <View style={styles.container}>
    <StatusBar barStyle="dark-content" translucent />
    <Image style={styles.image} source={{ uri: image }} />
    <Text style={styles.title} numberOfLines={1}>
      {name}
    </Text>
  </View>
);

export default Navbar;
