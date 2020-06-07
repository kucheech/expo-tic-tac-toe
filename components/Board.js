import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Square from './Square';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

export default Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const renderSquare = i => <Square value={squares[i]} onClick={() => handleClick(i)} />;

  const handleClick = i => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const new_squares = squares.slice();
    new_squares[i] = xIsNext ? 'X' : 'O';
    setSquares(new_squares);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

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
