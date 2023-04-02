import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import DashboardScreen from "./DashboardScreen";
import NotificationsScreen from "./Notifications/NotificationsScreen";
import SearchScreen from "./Search/SearchScreen";
import SettingsScreen from "./Settings/SettingsScreen";
import ProfileScreen from "./Profile/ProfileScreen";
import { constansts } from "../../lib/constants";
import DashboardStack from "./DashboardStack";

const Stack = createBottomTabNavigator();
const TABS_SIZE = 36;
export default function DashboardBottomTabs() {
  return (
    <Stack.Navigator
      initialRouteName={"DashboardStack"}
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "#030737",
          height: 85,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        tabBarShowLabel: false,
        headerShadowVisible: false,
      })}
    >
      <Stack.Screen
        name="DashboardStack"
        component={DashboardStack}
        options={{
          headerShown: false,
          
          tabBarIcon: ({ focused, }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../../assets/img/tabs/home.png")}
                  style={{
                    width: TABS_SIZE,
                    height: TABS_SIZE,
                    opacity: focused?1:0.8
                  }}
                />
                {focused && (
                  <View
                    style={{
                      height: 5,
                      width: 23,
                      position: "absolute",
                      bottom: -13,
                      backgroundColor: "#fff",
                      borderRadius: 50,
                    }}
                  />
                )}
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../../assets/img/tabs/bell-on.png")}
                  style={{
                    width: TABS_SIZE,
                    height: TABS_SIZE,
                    opacity: focused?1:0.8
                  }}
                />
                {focused && (
                  <View
                    style={{
                      height: 5,
                      width: 23,
                      position: "absolute",
                      bottom: -13,
                      backgroundColor: "#fff",
                      borderRadius: 50,
                    }}
                  />
                )}
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../../assets/img/tabs/search.png")}
                  style={{
                    width: TABS_SIZE,
                    height: TABS_SIZE,
                    opacity: focused?1:0.8
                  }}
                />
                {focused && (
                  <View
                    style={{
                      height: 5,
                      width: 23,
                      position: "absolute",
                      bottom: -13,
                      backgroundColor: "#fff",
                      borderRadius: 50,
                    }}
                  />
                )}
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../../assets/img/tabs/settings.png")}
                  style={{
                    width: TABS_SIZE,
                    height: TABS_SIZE,
                    opacity: focused?1:0.8
                  }}
                />
                {focused && (
                  <View
                    style={{
                      height: 5,
                      width: 23,
                      position: "absolute",
                      bottom: -13,
                      backgroundColor: "#fff",
                      borderRadius: 50,
                    }}
                  />
                )}
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../../assets/img/tabs/user.png")}
                  style={{
                    width: TABS_SIZE,
                    height: TABS_SIZE,
                    opacity: focused?1:0.8
                  }}
                />
                {focused && (
                  <View
                    style={{
                      height: 5,
                      width: 23,
                      position: "absolute",
                      bottom: -13,
                      backgroundColor: "#fff",
                      borderRadius: 50,
                    }}
                  />
                )}
              </View>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
}
