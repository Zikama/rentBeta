import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./screens/Home/HomeStack";
import DashboardBottomTabs from "./screens/Dashboard/DashboardBottomTabs";

const Stack = createNativeStackNavigator();

function AppWrapper() {
  const { token } = useSelector(
    (state: { token: { token: string | null } }) => state?.token
  );
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={token ? "Dashboard" : "Home"}>
        <Stack.Screen name="Home" component={HomeStack} options={{
          headerShown: false,
          headerShadowVisible: false
        }} />
        <Stack.Screen name="Dashboard" component={DashboardBottomTabs} options={{
          headerShown: false,
          headerShadowVisible: false,
          gestureEnabled: false,
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default function App() {
  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
