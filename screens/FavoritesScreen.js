import { View, Text, FlatList, StyleSheet } from "react-native";
import { MEALS } from "./../data.js";
import MealItem from "../components/MealItem.js";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context.js";

function renderRecipe(recipe) {
  item = recipe.item;

  const recipeProps = {
    mealId: item.id,
    title: item.title,
    imageUrl: item.imageUrl,
    duration: item.duration,
    complexity: item.complexity,
    affordability: item.affordability,
  };

  return <MealItem {...recipeProps} />;
}

function FavoritesScreen() {
  const { ids: favIds } = useContext(FavoritesContext);

  const favMeals = MEALS.filter((meal) => favIds.includes(meal.id));

  return (
    <View style={styles.container}>
      <FlatList
        style={{ padding: 16 }}
        data={favMeals}
        key={(item) => item.id}
        renderItem={renderRecipe}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
});

export default FavoritesScreen;
