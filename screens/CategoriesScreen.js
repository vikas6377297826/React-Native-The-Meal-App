import React from "react";
import { View, StyleSheet, Button, Text } from "react-native";

const CategoriesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen</Text>
      <Button
        title="GO to Meals!"
        onPress={() => {
          props.navigation.navigate({ routeName: "CategoryMeals" }); // MOST IMPORTTANT LINE
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

export default CategoriesScreen;
