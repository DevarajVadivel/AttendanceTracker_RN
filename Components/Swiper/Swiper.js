import React, { useState } from "react";
import { useNavigationState } from "@react-navigation/native";

import { View, Text, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  PanGestureHandler,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { text } from "@fortawesome/fontawesome-svg-core";

const { width, height } = Dimensions.get("screen");
export default function Swiper() {
  const valueX = useSharedValue(0);
  const [isPunchedIn, setPunchedIn] = useState(false);
  const textOpacity = useSharedValue(1);
  const changeOpacity = () => {
    textOpacity.value = withTiming(0);
  };
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (e, context) => {
      context.value = valueX.value;
    },
    onActive: (e, context) => {
      valueX.value = e.translationX + context.value;

      // if (valueX.value > (width - 50) / 2) {
      //   runOnJS(changeOpacity)();
      // }
    },
    onEnd: (e) => {
      if (valueX.value < (width - 50) / 2) {
        valueX.value = withSpring(0);
        runOnJS(setPunchedIn)(false);
      } else {
        valueX.value = withSpring(width - 50 - 70);
        // setPunchedIn(true);
        runOnJS(setPunchedIn)(true);
      }
    },
  });

  // Interpolate Range
  const InterpolateXInput = [0, width - 50 - 70];
  const animatedStyle = {
    swipe: useAnimatedStyle(() => {
      return {
        transform: [{ translateX: valueX.value }],
      };
    }),

    swipeText: useAnimatedStyle(() => {
      return {
        opacity: textOpacity.value,
      };
    }),
  };
  return (
    // <View style={styles.container}>
    <GestureHandlerRootView>
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
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View
            style={[
              {
                height: "80%",
                width: "15%",
                backgroundColor: isPunchedIn ? "red" : "cadetblue",
                borderRadius: 40,
                marginLeft: 5,
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
              },
              animatedStyle.swipe,
            ]}
          >
            <Icon
              name="clock-o"
              size={30}
              color="white"
              style={{ zIndex: 1 }}
            />
          </Animated.View>
        </PanGestureHandler>
        <Animated.Text
          style={[
            {
              color: "grey",
              marginLeft: isPunchedIn ? 0 : 60,
              fontWeight: "bold",
              zIndex: -1,
            },
            animatedStyle.swipeText,
          ]}
        >
          {isPunchedIn
            ? "<<< Swipe left to punch out"
            : "Swipe right to punch in >>>"}
        </Animated.Text>
      </View>
    </GestureHandlerRootView>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "cadetblue",
    height: height,
    width: width,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  swipeText: {
    color: "lightgrey",

    fontWeight: "bold",
    zIndex: -1,
  },
});
