import React from "react";
import {
  View,
  StyleSheet,
  Button,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Platform,
  Image,
} from "react-native";
import Colors from "../constants/Colors";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id, // THis is importtant Line You Should remember
            },
          });
        }}
      >
        <View>
          <Text style={styles.titleText}>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

// YE Screen KE Titile ko Change or Style karne ke lie use kia jata hai
CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  },
  headerTintColor: Platform.OS === "android" ? "black" : Colors.primaryColor,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    backgroundColor: Colors.accentColor,
    alignItems: "center",
    justifyContent: "center",
  },

  titleText: {
    color: "white",
    fontSize: 25,
    fontFamily: "dancing-script",
  },
});

export default CategoriesScreen;
