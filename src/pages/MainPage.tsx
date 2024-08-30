import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Board from "../components/Board";
import { StyleSheet } from "react-native";
import Panel from "../components/Panel";
import { useState } from "react";

export default function MainPage() {
  const possibleWins = [
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ],
  ];
  const [board, setBoard] = useState<(string | null)[][]>([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [nextPlayer, setNextPlayer] = useState("X");
  const [winner, setWinner] = useState<string | null>(null);

  const reset = () => {
    setBoard([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);
    setNextPlayer("X");
    setWinner(null);
  };

  const checkWinner = (board: (string | null)[][]) => {
    for (const win of possibleWins) {
      let match = 0;
      for (const w of win) {
        if (board[w[0]][w[1]] === null || board[w[0]][w[1]] !== nextPlayer)
          break;
        match++;
      }
      if (match === 3) {
        return nextPlayer;
      }
    }
    return null;
  };

  const handlePress = (rowIndex: number, squareIndex: number) => {
    if (board[rowIndex][squareIndex] !== null || winner) return;
    const newBoard = board.map((row, i) =>
      row.map((square, j) =>
        i === rowIndex && j === squareIndex ? nextPlayer : square
      )
    );
    setBoard(newBoard);
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    }

    setNextPlayer(nextPlayer === "X" ? "O" : "X");
  };
  const insets = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <Text style={styles.text}>Tic-tac-toe</Text>
      <Board board={board} handlePress={handlePress} />
      <Panel reset={reset} nextPlayer={nextPlayer} winner={winner} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },
});
