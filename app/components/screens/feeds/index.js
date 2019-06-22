import React, { Component } from 'react';
import { View, Text, FlatList, Image } from 'react-native';

import { styles, rowStyles } from './styles';
import Navbar from '../../custom/Navbar';
import { fetchRequest } from '../../../providers/apis';

class HomeScreen extends Component {
  page = {
    current: 1,
    total: 1,
  };
  state = {
    user: {
      id: 3,
      name: 'Kattie Pearson',
      image: 'https://randomuser.me/api/portraits/women/50.jpg',
    },
    feeds: [],
    isLoading: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const { user, feeds } = this.state;
    try {
      this.setState({ isLoading: true });
      const feedsResponse = await fetchRequest({
        user_id: user.id,
        page: this.page.current,
      });
      this.page.total = feedsResponse.last_page;
      const newArray = this.page.current === 1 ? feedsResponse.data : [...feeds, ...feedsResponse.data];
      this.setState({ feeds: newArray, isLoading: false });
    } catch (error) {
      console.log('Errorred: ', error);
      this.setState({ isLoading: false });
    }
  };

  _refreshFeed = () => {
    this.page.current = 1;
    this.fetchData();
  };

  loadMoreFeeds = () => {
    if (!this.state.isLoading
      && this.page.current < this.page.total) {
      this.page.current++;
      this.fetchData();
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
    const { user, feeds, isLoading } = this.state;
    return (
      <View style={styles.container}>
        <Navbar {...user} />
        <FlatList
          data={feeds}
          onRefresh={this._refreshFeed}
          refreshing={isLoading}
          keyExtractor={item => `${item.id}`}
          renderItem={this._renderPizza}
          onEndReached={this.loadMoreFeeds}
          onEndReachedThreshold={0.01}
        />
      </View>
    );
  }
}

export default HomeScreen;
