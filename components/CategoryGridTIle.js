import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

const CategoryGridTIle = (props) => {
  let TouchableComp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComp;
  }

  return (
    <TouchableComp
      style={{ ...styles.gridItem, backgroundColor: props.color }}
      onPress={props.onSelect}
    >
      <View>
        <Text style={styles.titleText}>{props.title}</Text>
      </View>
    </TouchableComp>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    padding: 5,
  },

  titleText: {
    color: "black",
    fontSize: 20,
  },
});

export default CategoryGridTIle;
