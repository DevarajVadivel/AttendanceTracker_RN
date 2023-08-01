import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";

const { width, height } = Dimensions.get("screen");
export default function Attendance(props) {
  const marked = {
    "2023-08-01": { marked: true },
    "2023-08-01": { selected: true },
  };
  return (
    <View style={styles.container}>
      <View style={styles.dateselected}>
        <Text
          style={{
            margin: 15,
            fontSize: 16,
          }}
        >
          Selected Date:
        </Text>
        <Text
          style={{
            margin: 15,
            fontSize: 16,
          }}
        >
          01/08/2023
        </Text>
      </View>
      <Calendar style={styles.calender} markedDates={marked} {...props} />
      <View style={styles.card}>
        <View style={styles.punchInOut}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              borderRightColor: "grey",
              borderRightWidth: 1,
              width: "50%",
              height: "100%",
            }}
          >
            <Text style={styles.font}>Punch-In</Text>
            <Text style={styles.font}>09:40 AM</Text>
          </View>
          <View
            style={{
              width: "50%",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Text style={styles.font}>Punch-out</Text>
            <Text style={styles.font}>06:10 PM</Text>
          </View>
        </View>
        <View style={styles.punchInOut}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              borderRightColor: "grey",
              borderRightWidth: 1,
              width: "50%",
              height: "100%",
            }}
          >
            <Text style={styles.font}>Office-In Time</Text>
            <Text style={styles.font}>09:00 AM</Text>
          </View>
          <View
            style={{
              width: "50%",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Text style={styles.font}>Office-Out Time</Text>
            <Text style={styles.font}>6:00 PM</Text>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#5F9EA0",
    alignItems: "center",
    height: height,
    width: width,
  },
  calender: {
    marginTop: 20,
    width: width - 30,
    borderRadius: 10,
    elevation: 10,
  },
  card: {
    width: width - 40,
    height: height / 5,
    marginTop: 30,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 10,
    justifyContent: "center",
  },
  punchInOut: {
    flexDirection: "row",
    margin: 10,
    height: "40%",
  },
  font: {
    fontSize: 15,
    padding: 3,
  },
  dateselected: {
    backgroundColor: "white",
    width: width - 55,
    marginTop: 60,
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
