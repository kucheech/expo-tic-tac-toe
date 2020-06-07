import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Game from './components/Game';

export default App = () => (
  <View style={styles.container}>
    <Game />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
