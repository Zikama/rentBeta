import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DynamicHeader from "../../components/DynamicHeader";
import { ActivityIndicator } from "react-native";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as Haptics from "expo-haptics"
import { constansts } from "../../lib/constants";
import { StatusBar } from "expo-status-bar";

const HEADER_MAX_HEIGHT = 350;
const HEADER_MIN_HEIGHT = 250;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default function HomeScreen(): JSX.Element {
  const scrollY = useRef<Animated.Value>(new Animated.Value(0)).current;
  const [continueClicked, setContinue] = useState<boolean>(false);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.container}>
    <StatusBar style='light'/>
      <DynamicHeader
        scrollY={scrollY}
        HEADER_MAX_HEIGHT={HEADER_MAX_HEIGHT}
        HEADER_MIN_HEIGHT={HEADER_MIN_HEIGHT}
        HEADER_SCROLL_DISTANCE={HEADER_SCROLL_DISTANCE}
        image={require("../../assets/img/bg.png")}
      />
      {Platform.select({android: (<ImageBackground
        source={require("../../assets/img/co-bg.png")}
        resizeMode="stretch"
        style={[styles.introContainerShape, {
          position: 'absolute',
          top: (HEADER_MAX_HEIGHT- 55),
          right: 0
        }]}
      />)}) }
      <ScrollView
        contentContainerStyle={styles.introContainer}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
      >
        {Platform.select({ios: (<ImageBackground
          source={require("../../assets/img/co-bg.png")}
          resizeMode="stretch"
          style={[styles.introContainerShape, {
            position: 'absolute',
            top: -50,
          }]}
        />)}) }
        <View
          style={{
            paddingHorizontal: 20.0,
            paddingVertical: 5.0,
          }}
        >
          <Text
            style={{
              color: constansts.primaryColor,
              fontSize: 52,
              fontWeight: "bold",
            }}
          >
            {`A Better way to Rent`}
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 20.0,
            paddingVertical: 5.0,
            marginTop: 10.0,
          }}
        >
          <Text
            style={{
              color: "#2D3360",
              fontSize: 14,
            }}
          >
            {`RentBeta is an all-in-one financial solution that unlocks opportunity for everyone involved in the residential and commercial rental space`}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20.0,
            paddingBottom: 20.0,
            flex: 1,
            alignItems: "flex-end",
            justifyContent: continueClicked ? "center" : "space-between",
          }}
        >
          <TouchableOpacity
            style={[
              {
                backgroundColor: "#030737",
                height: 65,
                justifyContent: "center",
                alignItems: "center",
                flex: 0.9,
                borderRadius: 65 / 2,
                shadowColor: "#030737",
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 2.65,

                elevation: 6,
              },
              continueClicked?{
                width: 65,
                flex: 0
              }:{},
            ]}
            onPress={(e) => {
              setContinue(!continueClicked);
              setTimeout(async () => {
                await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
                navigation.navigate("Dashboard", {
                  screen: "DashboardStack",
                });
              }, 2000);
            }}
          >
            <Text
              style={{
                color: constansts.primaryColor,
                fontSize: 25,
              }}
            >
              {continueClicked ?(
                <ActivityIndicator color={constansts.primaryColor} size={"large"} />
              ) : (
                `Continue`
              ) }
            </Text>
          </TouchableOpacity>
          {!continueClicked && (
            <TouchableOpacity
              style={{
                backgroundColor: constansts.primaryColor,
                width:65,
                height: 65,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 50,
              }}
            >
              <Image
                source={require("../../assets/img/G-logo.png")}
                style={{
                  resizeMode: "contain",
                  width: "50%",
                }}
              />
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
    width: Dimensions.get('window').width,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    height: HEADER_MAX_HEIGHT,
    top: 0,
    position: "absolute",
    width: "100%",
    justifyContent: "center",
    zIndex: -0,
    elevation: -0,
  },
  introContainer: {

    marginTop: HEADER_MAX_HEIGHT - 5,
    width: Dimensions.get('window').width,
    flex: 2,
    zIndex: 2,
    elevation: 2,
    overflow: 'visible',
  },
  introContainerShape: {
    height: 390,
    width: "100%",
    position: "absolute",
    top: 0,
  },
});
