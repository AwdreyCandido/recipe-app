import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "./data";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "./screens/CategoriesScreen";
import RecipeOverview from "./screens/RecipeOverview";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fde047",
        },
        sceneContainerStyle: { backgroundColor: "#fef9c3" },
        headerTitleStyle: {
          fontWeight: "700",
        },
        drawerContentStyle: { backgroundColor: "#fef9c3" },
        drawerInactiveTintColor: "#c1c1c1",
        drawerActiveTintColor: "#333",
        drawerActiveBackgroundColor: "#fde047",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="list" color={color} size={size} />;
          },
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="star" color={color} size={size} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
}

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
            fontWeight: "700",
          },
        }}
        initialRouteName="CategoriesScreen"
      >
        <Stack.Screen
          name="CategoriesScreen"
          component={DrawerNavigator}
          options={{
            title: "All Categories",
            headerShown: false,
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
          options={{ title: "About the Meal" }}
        />
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
