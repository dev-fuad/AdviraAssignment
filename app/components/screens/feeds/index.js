import React, { Component } from 'react';
import { View, Text, FlatList, Image } from 'react-native';

import { styles, rowStyles } from './styles';
import Navbar from '../../custom/Navbar';
import { fetchRequest } from '../../../providers/apis';

class HomeScreen extends Component {
  state = {
    user: {
      id: 3,
      name: 'Kattie Pearson',
      image: 'https://randomuser.me/api/portraits/women/50.jpg',
    },
    feeds: [{
      id: 115,
      title: "YumYum Black",
      photo: "http://advira.prologicsoft.com/storage/photos/meals/max/1556632809.png",
      restaurant: {
          id: 74,
          place_name: "My House",
      },
      total_likes: 1,
      total_comments: 0,
    }],
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const { user, feeds } = this.state;
    try {
      const feedsResponse = await fetchRequest({
        user_id: user.id,
        page: 1,
      });
      this.setState({ feeds: feedsResponse.data });
    } catch (error) {
      console.log('Errorred: ', error);
    }
  };

  _renderPizza = ({ item }) => (
    <View>
      <View>
        <Image style={rowStyles.image} source={{ uri: item.photo }} />
        <View style={rowStyles.titleContainer}>
          <Text style={rowStyles.title}>{item.title || ''}</Text>
          <Text style={rowStyles.place}>{(item.restaurant || {}).place_name || ''}</Text>
        </View>
      </View>
      <View style={rowStyles.statusContainer}>
        <Text style={rowStyles.likes}>{`${item.total_likes || 0} likes`}</Text>
        <Text style={rowStyles.comments}>{`${item.total_comments || 0} comments`}</Text>
      </View>
    </View>
  );

  render() {
    const { user, feeds } = this.state;
    return (
      <View style={styles.container}>
        <Navbar {...user} />
        <FlatList
          data={feeds}
          keyExtractor={item => `${item.id}`}
          renderItem={this._renderPizza}
        />
      </View>
    );
  }
}

export default HomeScreen;
