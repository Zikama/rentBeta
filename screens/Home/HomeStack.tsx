import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";

const Stack = createNativeStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName={"HomeScreen"}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
