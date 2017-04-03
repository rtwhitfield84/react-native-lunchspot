import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Examples } from '@shoutem/ui'; 

export default class lunchspot extends Component {
  render() {
    return (
      <Examples />
    );
  }
}


AppRegistry.registerComponent('lunchspot', () => lunchspot);
