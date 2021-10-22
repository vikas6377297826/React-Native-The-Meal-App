import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId"); // This will get parma ID Of perent component
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId); // ye funtion hum Jis per click karenge uska id or humra id Check karega

  return (
    <View style={styles.screen}>
      <Text>The CategoryMealsScreen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          props.navigation.navigate("MealDetail");
        }}
      />
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.goBack(); // Also We Can Use " pop(); "
        }}
      />
    </View>
  );
};

// Humne ek bar uper getparma ker dia is karna humne isko object se funtion bana ker likha hai
CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
