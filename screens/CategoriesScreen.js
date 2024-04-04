import { View, FlatList } from "react-native";
import { CATEGORIES } from "./../data.js";
import CategoryGridTile from "../components/CategoryGridTile.js";

function CategoriesScreen({ navigation }) {
  function navigationHandler(categoryId) {
    navigation.navigate("RecipeOverview", { categoryId });
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(data) => (
        <CategoryGridTile
          title={data.item.title}
          color={data.item.color}
          onPress={navigationHandler.bind(this, data.item.id)}
        />
      )}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
