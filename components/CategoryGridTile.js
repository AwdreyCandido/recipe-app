import { Pressable, View, Text, StyleSheet, SafeAreaView } from "react-native";

function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={{ ...styles.gridItem, backgroundColor: color }}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "#ccc" }}
        style={styles.button}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 160,
    borderRadius: 8,
    elevation: 4,
    overflow: "hidden",
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default CategoryGridTile;
