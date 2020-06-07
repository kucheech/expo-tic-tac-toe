import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Square from './Square';

export default Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const renderSquare = i => <Square value={squares[i]} onClick={() => handleClick(i)} />;

  const handleClick = i => {
    const new_squares = squares.slice();
    new_squares[i] = xIsNext ? 'X' : 'O';
    setSquares(new_squares);
    setXIsNext(!xIsNext);
  };

  const status = 'Next player: ' + (xIsNext ? 'X' : 'O');

  return (
    <View style={styles.board}>
      <Text style={styles.status}>{status}</Text>

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
  status: {
    fontSize: 18
  },
  board_row: {
    flexDirection: 'row',
  },
});
