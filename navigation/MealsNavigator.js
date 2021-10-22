import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Colors";

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

export default createAppContainer(MealsNavigator);
