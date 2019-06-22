import React, { Component } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';

import { styles, rowStyles } from './styles';
import Navbar from '../../custom/Navbar';
import { fetchRequest } from '../../../providers/apis';
import { fetchAPI, fetchMoreAPI } from '../../../store/actions';

type P = {
  user: {
    id: Number,
    name: String,
    image: String,
  },
  feeds: {
    page: {
      index: Number,
      total: Number,
    },
    data: Array,
    isLoading: Boolean,
  },
  fetchAPI: Function,
  fetchMoreAPI: Function,
};

class HomeScreen extends Component<P> {
  componentDidMount() {
    this.props.fetchAPI();
  }

  loadMoreFeeds = () => {
    const {
      feeds: { page, isLoading },
      fetchMoreAPI: loadMore,
    } = this.props;
    console.log('loadMore? ', isLoading, page);
    if (!isLoading && page.index < page.total) {
      loadMore();
    }
  };

  _renderPizza = ({ item }) => (
    <View>
      <View>
        <Image style={rowStyles.image} source={{ uri: item.photo }} />
        <View style={rowStyles.titleContainer}>
          <Text style={rowStyles.title}>{item.title || ''}</Text>
          <Text style={rowStyles.place}>
            {(item.restaurant || {}).place_name || ''}
          </Text>
        </View>
      </View>
      <View style={rowStyles.statusContainer}>
        <Text style={rowStyles.likes}>{`${item.total_likes || 0} likes`}</Text>
        <Text style={rowStyles.comments}>{`${item.total_comments ||
          0} comments`}</Text>
      </View>
    </View>
  );

  render() {
    const {
      user,
      feeds: { data, isLoading },
      fetchAPI: refreshFeed,
    } = this.props;
    return (
      <View style={styles.container}>
        <Navbar {...user} />
        <FlatList
          data={data}
          onRefresh={refreshFeed}
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

const mapStateToProps = state => ({
  feeds: state.feeds,
  user: state.user,
});

const mapDispatchToProps = {
  fetchAPI,
  fetchMoreAPI,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
