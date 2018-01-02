// Import a library to help create a component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
// Not sure if flex: 1 is necessary with this version of react-native
// In the video tutorial the iOS device was always snapping back to the top
// but on my android device it was working fine without the flex: 1 specification.
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
