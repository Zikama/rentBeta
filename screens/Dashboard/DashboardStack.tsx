import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import DashboardScreen from "./DashboardScreen";
import HouseDetails from "./House/HouseDetails";
import { constansts } from "../../lib/constants";

const Stack = createNativeStackNavigator();
export default function DashboardStack() {
  return (
    <Stack.Navigator initialRouteName={"DashboardScreen"}>
      <Stack.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{
          headerShown: false,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="HouseDetails"
        component={HouseDetails}
        options={{
          //   headerShown: false,
          //   headerShadowVisible: false,
          headerTitle: "House",
          headerTintColor: constansts.primaryColor,
          headerTitleStyle: {
            color: constansts.secondaryColor,
          }
        }}
      />
    </Stack.Navigator>
  );
}
