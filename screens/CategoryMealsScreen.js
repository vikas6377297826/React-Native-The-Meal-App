import React from "react";
import { View, StyleSheet, Text, Button, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        image={itemData.item.imageUrl}
        affordabillity={itemData.item.affordabillity}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  const catId = props.navigation.getParam("categoryId"); // This will get parma ID Of perent component
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId); // ye funtion hum Jis per click karenge uska id or humra id Check karega

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => {
          item.id;
        }}
        renderItem={renderMealItem}
        style={styles.mealScreen}
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
  mealScreen: {
    width: "100%",
  },
});

export default CategoryMealsScreen;
