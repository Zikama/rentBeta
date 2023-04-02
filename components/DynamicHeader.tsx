import { Animated, ImageURISource, StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
interface DynamicHeaderProps {
  scrollY: Animated.Value;
  HEADER_MAX_HEIGHT: number;
  HEADER_MIN_HEIGHT: number;
  HEADER_SCROLL_DISTANCE: number;
  image: number | Animated.Value | Animated.AnimatedInterpolation<string | number> | Animated.WithAnimatedObject<ImageURISource>
}
export default function DynamicHeader({
  scrollY,
  HEADER_MAX_HEIGHT,
  HEADER_MIN_HEIGHT,
  HEADER_SCROLL_DISTANCE,
  image
}: DynamicHeaderProps) {
  const headerScale: Animated.AnimatedInterpolation<string | number> =
    scrollY.interpolate({
      inputRange: [-HEADER_SCROLL_DISTANCE, 0, HEADER_SCROLL_DISTANCE],
      outputRange: [1.5, 1, 1],
      extrapolate: "clamp",
    });

  const headerTranslateY: Animated.AnimatedInterpolation<string | number> =
    scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: "clamp",
    });

  return (
    <Animated.Image
      source={image}
      style={[
        styles.image,
        
        {
            height: HEADER_MAX_HEIGHT,
          transform: [{ scale: headerScale }, { translateY: headerTranslateY }],
        },
      ]}
    />
  );
}
const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    height: 0,
    top: 0,
    position: "absolute",
    width: "100%",
    justifyContent: "center",
  },
});
