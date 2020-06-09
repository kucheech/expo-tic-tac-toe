import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
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
  const [history, setHistory] = useState([{ squares: Array(9).fill(null), move: 'Start of game' }]);
  const [playerTurn, setPlayerTurn] = useState('X');

  const handleClick = i => {
    const current = history.slice(-1)[0];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = playerTurn;
    setHistory(history.concat([{ squares, move: getMove(playerTurn, i) }]));
    setPlayerTurn(playerTurn === 'X' ? 'O' : 'X');
  };


  const current = history.slice(-1)[0];
  const winner = calculateWinner(current.squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + playerTurn;
  }
  const move = current.move;
  const moves = history.map(i => ({ key: i.move }));

  return (
    <View style={styles.game}>
      <Text style={styles.status}>{status}</Text>

      <Board style={styles.board} squares={current.squares} onClick={i => handleClick(i)} />

      <FlatList style={styles.list}
        data={moves}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
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
    fontSize: 18,
    textAlign: 'center'
  },
  status: {
    fontSize: 18,
    marginBottom: 16
  }
});
