import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import RecipeOverview from "./screens/RecipeOverview";
import { CATEGORIES } from "./data";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#fde047",
          },
          cardStyle: { backgroundColor: "#fef9c3" },
          headerTitleStyle: {
            fontWeight: "700"
          }
        }}
        initialRouteName="CategoriesScreen"
      >
        <Stack.Group>
          <Stack.Screen
            name="CategoriesScreen"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name="RecipeOverview"
            component={RecipeOverview}
            options={({ route, navigation }) => {
              const catId = route.params.categoryId;
              const [category] = CATEGORIES.filter((category) => {
                return category.id === catId;
              });

              return {
                title: category.title,
              };
            }}
          />
          <Stack.Screen
            name="MealsDetails"
            component={MealDetailScreen}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
