import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Swiper from "../components/Swiper/Swiper";

const Tab = createMaterialBottomTabNavigator();

const { width, height } = Dimensions.get("screen");

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={{ margin: 35, width: width - 30 }}>
        <Text
          style={{
            fontSize: 30,
            color: "white",
            marginTop: 10,
            fontWeight: "bold",
          }}
        >
          Hi, Devaraj
        </Text>
        <Text style={{ color: "#2A272A", fontStyle: "italic" }}>
          Welcome Back!
        </Text>
        <Icon
          name="user-circle"
          size={50}
          color="white"
          style={{ position: "absolute", top: 15, right: 10, zIndex: 1 }}
        />
      </View>

      {/* Attendance details */}
      <View
        style={{
          height: height / 8,
          width: width - 30,
          backgroundColor: "white",
          borderRadius: 10,
          marginTop: -20,
        }}
      >
        {/* text details */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <Text>This Month</Text>
          <Text style={{ textDecorationLine: "underline" }}>View</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.attNum}>10</Text>
            <Text>Present</Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <Text style={styles.attNum}>3</Text>
            <Text>Late</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.attNum}>1</Text>
            <Text>Absent</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.attNum}>20</Text>
            <Text>Total</Text>
          </View>
        </View>
      </View>
      {/* catogories section */}

      <View
        style={{
          height: height / 8,
          width: width,
          // backgroundColor: "white",
          borderRadius: 10,
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <View style={styles.categoryCard}>
          <Icon name="calendar" size={40} color="white" style={{ zIndex: 1 }} />
          <Text style={{ color: "white" }}>Attendance</Text>
        </View>
        <View style={styles.categoryCard}>
          <Icon name="frown-o" size={40} color="white" style={{ zIndex: 1 }} />
          <Text style={{ color: "white" }}>Leave</Text>
        </View>
        <View style={styles.categoryCard}>
          <Icon name="th-list" size={40} color="white" style={{ zIndex: 1 }} />
          <Text style={{ color: "white" }}>Task</Text>
        </View>
        <View style={styles.categoryCard}>
          <Icon name="wrench" size={40} color="white" style={{ zIndex: 1 }} />
          <Text style={{ color: "white" }}>Settings</Text>
        </View>
      </View>

      {/* Time and Productive hours calcluation */}

      <View
        style={{
          height: height / 8,
          width: width - 30,
          backgroundColor: "white",
          borderRadius: 10,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            height: "100%",
            width: "50%",
            borderRightWidth: 1,
            borderRightColor: "grey",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              alignSelf: "flex-start",
              marginLeft: 30,
              textDecorationLine: "underline",
            }}
          >
            Live
          </Text>
          <Text style={{ fontSize: 30, color: "cadetblue" }}>9.30 AM</Text>
        </View>
        <View
          style={{
            height: "100%",
            width: "50%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Productive Hours</Text>
          <Text style={{ fontSize: 30, color: "cadetblue" }}>09.30</Text>
        </View>
      </View>

      {/* swipe Right/left to Punch in/out */}
      <View
        style={{
          height: height / 13,
          width: width - 50,
          backgroundColor: "white",
          borderRadius: 30,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {/* pangesture works */}

        <Swiper />
      </View>

      {/* Punch in and out details */}

      <View
        style={{
          height: height / 8,
          width: width - 30,
          backgroundColor: "white",
          borderRadius: 10,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            height: "100%",
            width: "50%",
            borderRightWidth: 1,
            borderRightColor: "grey",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Punch In</Text>
          <Text style={{ fontSize: 30, color: "cadetblue" }}>--:--</Text>
        </View>
        <View
          style={{
            height: "100%",
            width: "50%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Punch Out</Text>
          <Text style={{ fontSize: 30, color: "cadetblue" }}>--:--</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "cadetblue",
    height: height,
    width: width,
    alignItems: "center",
    gap: 20,
  },
  attNum: {
    fontSize: 25,
    color: "cadetblue",
    fontWeight: "bold",
  },
  card: {
    height: height / 8,
    width: width - 30,
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
  },
  categoryCard: {
    height: "100%",
    width: "22%",
    backgroundColor: "transapent",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});
