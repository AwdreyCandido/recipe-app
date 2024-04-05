import { View, Text, FlatList, StyleSheet } from "react-native";
import { MEALS } from "./../data.js";
import MealItem from "../components/MealItem.js";

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

function RecipeOverview({ route }) {
  const categoryId = route.params.categoryId;

  const recipes = MEALS.filter((recipe) => {
    return recipe.categoryIds.includes(categoryId);
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        key={(item) => item.id}
        renderItem={renderRecipe}
      />
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
