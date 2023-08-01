import { View, Text, Dimensions } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AttendanceScreen from "./AttendanceScreen";
import TaskScreen from "./TaskScreen";
import HomeScreen from "./HomeScreen";
import LeaveScreen from "./LeaveScreen";
import SettingsScreen from "./SettingsScreen";
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createMaterialBottomTabNavigator();
const { width, height } = Dimensions.get("screen");
export default function BottomNavigator() {
  return (
    // <View
    //   style={{
    //     height: height / 11,
    //     width: width - 10,
    //   }}
    // >
    <Tab.Navigator
      activeColor="black"
      inactiveColor="white"
      initialRouteName="Home"
      backBehavior="none"
      shifting={true}
      //   labeled={false}
      barStyle={{
        backgroundColor: "cadetblue",
        borderColor: "white",
        borderWidth: 1,
        width: width - 15,
        alignSelf: "center",
        margin: 5,
        borderRadius: 10,
        padding: 2,
      }}
    >
      <Tab.Screen
        name="Attendance"
        component={AttendanceScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="calendar" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Task"
        component={TaskScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="th-list" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={25} color={color} />
          ),
        }}
        // independent={true}
      />
      <Tab.Screen
        name="Leave"
        component={LeaveScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="frown-o" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="cog" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
    // </View>
  );
}
