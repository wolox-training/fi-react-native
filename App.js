import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Navigator from './navigation';

class Main extends Component {
  render() {
    return <Navigator />;
  }
}

export default Main;