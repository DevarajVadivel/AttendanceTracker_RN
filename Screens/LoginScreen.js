import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Pressable,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import OTPInput from "../components/OTP/OTPInput";

import Icon from "react-native-vector-icons/FontAwesome";

const { width, height } = Dimensions.get("screen");

export default function LoginScreen({ navigation }) {
  const [text, setText] = useState("");
  const [focus, setFocus] = useState(false);

  const [otpCode, setOTPCode] = useState("");
  const [isPinReady, setIsPinReady] = useState(false);
  const maximumCodeLength = 4;

  return (
    // Body
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <KeyboardAvoidingView style={styles.container} behaviour="padding">
        <StatusBar style="auto" />

        {/* logo or Image */}
        <View
          style={{
            backgroundColor: "white",
            width: "100%",
            height: "25%",
            alignItems: "center",
            justifyContent: "center",
            margin: 40,
          }}
        >
          <Image
            source={require("../assets/login1.png")}
            style={{ height: "120%", width: "80%" }}
          ></Image>
        </View>
        {/* inputs div */}
        <Pressable
          style={{
            width: "100%",
            height: "70%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 40,
            backgroundColor: "cadetblue",
          }}
          onPress={Keyboard.dismiss}
        >
          <Text
            style={{
              color: "white",
              fontSize: 25,
              fontWeight: "bold",
              marginTop: 20,
            }}
          >
            Login
          </Text>
          {/* Employeeid input */}
          <Icon
            name="id-badge"
            size={30}
            color="cadetblue"
            style={{ position: "absolute", top: 110, left: 60, zIndex: 1 }}
          />
          <TextInput
            style={{
              borderColor:
                text.length >= 6
                  ? "green"
                  : text.length == 0
                  ? "transparent"
                  : "red",
              borderWidth: 2,
              width: "80%",
              height: 55,
              borderRadius: 10,
              backgroundColor: focus ? "rgb(212, 226, 212)" : "white",
              paddingLeft: 60,
              fontSize: 15,
              // marginTop: -60,
            }}
            placeholder="Employee ID"
            // placeholderTextColor="grey"
            onChangeText={(e) => setText(e)}
            value={text}
            onFocus={() => {
              // setFocus(true);
              // setEdit1(false);
            }}
            keyboardType="numeric"
          ></TextInput>
          {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
          {/* passwords  */}
          <Text
            style={{
              color: "white",
              margin: -20,
              marginBottom: -30,
              alignSelf: "flex-start",
              marginLeft: 50,
            }}
          >
            Enter Password
          </Text>

          <Pressable
            style={{
              width: "70%",
              height: 55,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 20,
              // backgroundColor: "blue",
            }}
          >
            <OTPInput
              code={otpCode}
              setCode={setOTPCode}
              maximumLength={maximumCodeLength}
              setIsPinReady={setIsPinReady}
            />

            {/* <ButtonContainer
            disabled={!isPinReady}
            style={{
              backgroundColor: !isPinReady ? "grey" : "#000000",
            }}
          >
            <ButtonText
              style={{
                color: !isPinReady ? "black" : "#EEEEEE",
              }}
            >
              Login
            </ButtonText>
          </ButtonContainer> */}
          </Pressable>

          <Text style={{ color: "white", textDecorationLine: "underline" }}>
            Forget Password?
          </Text>

          {/* submit button */}

          <TouchableOpacity
            style={{
              borderColor: "white",
              borderWidth: 1,
              width: "80%",
              height: "8%",
              borderRadius: 10,
              backgroundColor: "cadetblue",
              padding: 10,
              alignItems: "center",

              // marginTop: 50,
            }}
            onPress={() => navigation.navigate("BottomNavigator")}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderColor: "transparent",
              borderWidth: 1,
              width: "80%",
              height: "8%",
              borderRadius: 10,
              backgroundColor: "white",
              padding: 10,
              alignItems: "center",
              marginTop: -20,
            }}
          >
            <Text style={{ color: "cadetblue", fontWeight: "bold" }}>
              Signup
            </Text>
          </TouchableOpacity>
        </Pressable>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: height,
    // width: width,
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "space-between",
    // flexWrap:"wrap",
    alignItems: "center",
    // padding:10
  },
  passwordInput: {
    borderColor: "transparent",
    borderWidth: 1,
    width: "17%",
    height: "100%",
    borderRadius: 10,
    backgroundColor: "white",
    padding: 10,
    textAlign: "",
  },
  scrollViewContent: {
    flexGrow: 1, // Make sure ScrollView takes all available space
  },
});
