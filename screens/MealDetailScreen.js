import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const MealDetailScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The MealDetailScreen</Text>
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.navigate({ routeName: "Categories" }); // popToTop() se Sbase Top Vali Screen Per ja skte hai
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

export default MealDetailScreen;
