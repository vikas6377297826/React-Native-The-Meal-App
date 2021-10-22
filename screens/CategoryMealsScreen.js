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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
