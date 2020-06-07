import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default Square = () => (
  <TouchableOpacity style={styles.square} >
    <Text style={styles.text}>{/* TODO */}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  square: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: 80,
    borderColor: 'black',
    borderWidth: 0.25,
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold'
  }
});