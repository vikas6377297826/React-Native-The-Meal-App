import React from "react";
import { View, StyleSheet, Text } from "react-native";

const FiltersScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>The FiltersScreen</Text>
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

export default FiltersScreen;
