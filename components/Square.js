import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default Square = props => {
  const [value, setValue] = useState(null);
  return (
    <TouchableOpacity style={styles.square} onPress={() => setValue('X')}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
}

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