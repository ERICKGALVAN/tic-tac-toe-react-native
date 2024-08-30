import { Button, View, Text } from "react-native";
import { StyleSheet } from "react-native";

interface PanelProps {
  reset: () => void;
  nextPlayer: string;
  winner: string | null;
}

export default function Panel({ reset, nextPlayer, winner }: PanelProps) {
  return (
    <View style={styles.container}>
      <Button title="Reset" onPress={reset} />
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.normalText}>Next player: </Text>
          <Text style={styles.resaltedText}>{winner ? "-" : nextPlayer} </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.normalText}>Winner: </Text>
          <Text style={styles.resaltedText}>{winner ?? "?"} </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 20,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  normalText: {
    fontSize: 20,
    fontWeight: "500",
  },
  resaltedText: {
    fontSize: 29,
    fontWeight: "bold",
  },
});
