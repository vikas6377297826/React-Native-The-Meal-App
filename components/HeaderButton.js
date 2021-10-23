import React from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton {...props}>
      <Ionicons name="ios-star" size={24} color="black" />
    </HeaderButton>
  );
};

export default CustomHeaderButton;
