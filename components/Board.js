import React from 'react';
import { StyleSheet, View } from 'react-native';
import Square from './Square';

export default Board = props => {
  const renderSquare = i => <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;

  return (
    <View style={styles.board}>
      <View style={styles.board_row}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </View>
      <View style={styles.board_row}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </View>
      <View style={styles.board_row}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    alignItems: 'center',
  },
  board_row: {
    flexDirection: 'row',
  },
});
