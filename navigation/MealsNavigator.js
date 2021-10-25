import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Colors";
import { createBottomTabNavigator } from "react-navigation-tabs";
import FavoritesScreen from "../screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Platform } from "react-native";

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" ? "white" : Colors.primaryColor,
        },
        headerTintColor:
          Platform.OS === "android" ? "black" : Colors.primaryColor,
      },
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" ? "white" : Colors.primaryColor,
        },
        headerTintColor:
          Platform.OS === "android" ? "black" : Colors.primaryColor,
      },
    },
    MealDetail: MealDetailScreen,
  },
  {
    // initialRouteName: "MealDetail",  // ye hume deafult screen dekhaega
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? "white" : Colors.primaryColor,
      },
      headerTintColor:
        Platform.OS === "android" ? "black" : Colors.primaryColor,
      headerTitle: "A Default Screen",
    },
  }
);

const bottomTabConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
    },
  },
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(bottomTabConfig, {
        activeTintColor: Colors.accentColor,
        shifting: true, // try false
        //  barStyle: {
        //    backgroundColor: "white",
        //  },
      })
    : createBottomTabNavigator(bottomTabConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor,
        },
      });

export default createAppContainer(MealsFavTabNavigator);
