import React, {Component} from 'react';
import { Provider } from 'react-redux';

import store from './app/store';
import Connectivity from './app/components/custom/Connectivity';
import HomeScreen from './app/components/screens/feeds';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Connectivity>
          <HomeScreen />
        </Connectivity>
      </Provider>
    );
  }
}
