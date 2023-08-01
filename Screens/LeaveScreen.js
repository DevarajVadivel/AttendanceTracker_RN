import { View, Text, Dimensions } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("screen");
export default function LeaveScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>LeaveScreen</Text>
    </View>
  );
}
