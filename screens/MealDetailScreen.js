import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { MEALS } from "../data/dummy-data";

import { Ionicons } from "@expo/vector-icons";

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.navigate({ routeName: "Categories" }); // popToTop() se Sbase Top Vali Screen Per ja skte hai
        }}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <Ionicons
        name="ios-star"
        size={24}
        color="black"
        onPress={() => {
          console.log("Merked as Favorait");
        }}
      />
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
