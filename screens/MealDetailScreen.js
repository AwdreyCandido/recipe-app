import { useLayoutEffect, useContext } from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import { MEALS } from "./../data.js";
import IconButton from "../components/IconButton.js";
import { FavoritesContext } from "../store/context/favorites-context.js";

function MealDetailScreen({ route, navigation }) {
  const {
    ids: favIds,
    addFavorite,
    removeFavorite,
  } = useContext(FavoritesContext);

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  let isFavorite = favIds.includes(mealId);

  function favoriteHandler() {
    if (isFavorite) {
      removeFavorite(mealId);
    } else {
      addFavorite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {  
        return (
          <IconButton
            icon={"star"}
            color={isFavorite ? "#f97316" : "white"}
            onPress={favoriteHandler}
          />
        );
      },
    });
  }, [navigation, favoriteHandler]);

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{selectedMeal.duration}m</Text>
        <Text style={styles.detailItem}>
          {selectedMeal.complexity.toUpperCase()}
        </Text>
        <Text style={styles.detailItem}>
          {selectedMeal.affordability.toUpperCase()}
        </Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.subtitle}>Ingredients:</Text>
        <View>
          {selectedMeal.ingredients.map((ingredient) => {
            return (
              <Text style={styles.ingredient} key={ingredient}>
                {ingredient}
              </Text>
            );
          })}
        </View>
        <Text style={styles.subtitle}>Steps:</Text>
        {selectedMeal.steps.map((step) => {
          return (
            <Text style={{ marginTop: 3 }} key={step}>
              {step}
            </Text>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    marginVertical: 8,
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 4,
    marginTop: 16,
  },
  detailContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 30,
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
  ingredient: {
    marginTop: 3,
    padding: 6,
    backgroundColor: "#fde047",
    borderRadius: 6,
    fontWeight: "500",
  },
});

export default MealDetailScreen;
