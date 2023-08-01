import React from "react";

import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import BottomNavigator from "./Screens/BottomNavigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import swiper from "./components/Swiper/Swiper";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <GestureHandlerRootView style={{ backgroundColor: "red" }}> */}
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          // options={{ title: "Login" }}
          options={{
            headerShown: false, // Hide the navigation header for this screen
          }}
        />

        <Stack.Screen
          name="BottomNavigator"
          component={BottomNavigator}
          // options={{ title: "Welcome" }}
          options={{
            headerShown: false, // Hide the navigation header for this screen
          }}
        />

        {/* <Stack.Screen
          name="Swiper"
          component={swiper}
          // options={{ title: "Welcome" }}
          options={{
            headerShown: false, // Hide the navigation header for this screen
          }}
        /> */}
      </Stack.Navigator>
      {/* </GestureHandlerRootView> */}
    </NavigationContainer>
  );
}
