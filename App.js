import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import MealsNavigator from "./navigation/MealsNavigator";
import { enableScreens } from "react-native-screens";

enableScreens();

// FOR FETCHING CUSTOM FONTS THIS REQUIRE
const fetchFonts = () => {
  Font.loadAsync({
    "dancing-script": require("./fonts/DancingScript.ttf"),
    "cairo-black": require("./fonts/Cairo-Black.ttf"),
  });
};
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return <MealsNavigator />;
}

const styles = StyleSheet.create({});
