import { Pressable, Text, View } from "react-native";
import { StyleSheet } from "react-native";

interface BoardProps {
  board: (string | null)[][];

  handlePress: (rowIndex: number, squareIndex: number) => void;
}

export default function Board({
  board,

  handlePress,
}: BoardProps) {
  return (
    <View style={styles.board}>
      {board.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((square, squareIndex) => (
            <Pressable
              key={squareIndex}
              style={styles.square}
              onPress={() => handlePress(rowIndex, squareIndex)}
            >
              <Text style={styles.text}>{square}</Text>
            </Pressable>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    width: 300,
    height: 300,
    backgroundColor: "lightblue",
    marginTop: 60,
  },
  row: {
    flexDirection: "row",
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderWidth: 1,
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
});
