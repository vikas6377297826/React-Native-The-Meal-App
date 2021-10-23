import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";

const MealItem = (props) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDeatil }}>
            <Text>{props.duration}m</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordabillity.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#ccc9",
    marginVertical: 10,
    borderBottomWidth: 1,
    borderColor: "gray",
    overflow: "hidden",
  },
  mealRow: {
    flexDirection: "row",
  },

  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },

  mealHeader: {
    height: "90%",
  },

  mealDeatil: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },

  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.3)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 22,
    color: "white",

    textAlign: "center",
  },
});

export default MealItem;
