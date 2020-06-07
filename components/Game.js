import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Board from './Board';

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

export default Game = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = i => {
    const current = history.slice(-1)[0];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? 'X' : 'O';
    setHistory(history.concat([{ squares }]));
    setXIsNext(!xIsNext);
  };


  const current = history.slice(-1)[0];
  const winner = calculateWinner(current.squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <View style={styles.game}>
      <Text style={styles.status}>{status}</Text>

      <Board squares={current.squares} onClick={i => handleClick(i)} />
    </View>
  );
};

const styles = StyleSheet.create({
  game: {
    alignItems: 'center',
  },
  status: {
    fontSize: 18
  }
});
