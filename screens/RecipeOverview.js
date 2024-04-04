import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "./../data.js";

function RecipeOverview() {
  return (
    <View style={styles.container}>
      <Text>Recipes Overview</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default RecipeOverview;
