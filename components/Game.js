import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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

const getMove = (player, i) => {
  const x = Math.floor(i / 3) + 1;
  const y = i % 3 + 1;
  return `${player} at [${x}][${y}]`;
}

export default Game = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null), move: 'Start of game', stepNumber: 0 }]);
  const [playerTurn, setPlayerTurn] = useState('X');
  const [stepNumber, setStepNumber] = useState(0);

  const handleClick = i => {
    const new_history = history.slice(0, stepNumber + 1);
    const current = new_history.slice(-1)[0];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = playerTurn;
    setHistory(new_history.concat([{ squares, move: getMove(playerTurn, i) }]));
    setPlayerTurn(playerTurn === 'X' ? 'O' : 'X');
    setStepNumber(new_history.length);
  };

  const jumpTo = stepNumber => {
    setStepNumber(stepNumber);
    setPlayerTurn(stepNumber % 2 === 0 ? 'X' : 'O');
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + playerTurn;
  }
  const move = current.move;
  const moves = history.map((m, i) => ({ key: m.move, stepNumber: i }));

  return (
    <View style={styles.game}>
      <Text style={styles.status}>{status}</Text>

      <Board style={styles.board} squares={current.squares} onClick={i => handleClick(i)} />

      <FlatList style={styles.list}
        data={moves}
        renderItem={({ item }) => <TouchableOpacity style={styles.item} onPress={() => jumpTo(item.stepNumber)}><Text>{item.key}</Text></TouchableOpacity>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  game: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 120
  },
  list: {
    marginTop: 16
  },
  item: {
    fontSize: 12,
    textAlign: 'center',
    padding: 4
  },
  status: {
    fontSize: 18,
    marginBottom: 16
  }
});
