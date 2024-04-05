import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";

function MealItem({
  mealId,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  // onPress,
}) {
  const navigation = useNavigation();

  function navigationHandler() {
    navigation.navigate("MealsDetails", { mealId });
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={navigationHandler} android_ripple={{ color: "#ccc" }}>
        <View>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{duration}m</Text>
          <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});

export default MealItem;
