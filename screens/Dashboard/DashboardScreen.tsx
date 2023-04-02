import React from "react";
import {
  Image,
  Linking,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Header from "../../components/Dashboard/Header";
import { constansts } from "../../lib/constants";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function DashboardScreen() {

  let options = [
    {
      name: "House",
      counts: 50,
      icon: require("../../assets/img/dashboard/home.png"),
    },
    {
      name: "Apartment",
      counts: 26,
      icon: require("../../assets/img/dashboard/key.png"),
    },
    {
      name: "Apartment",
      counts: 26,
      icon: require("../../assets/img/dashboard/home.png"),
    },
  ];

  const tools = [
    {
      name: "Maintenance",
      icon: require("../../assets/img/dashboard/tool.png"),
    },
    {
      name: "Report",
      icon: require("../../assets/img/dashboard/flag.png"),
    },
    {
      name: "Reminder",
      icon: require("../../assets/img/dashboard/bell-orange.png"),
    },
  ];

  let topTenants = [
    {
      names: "Mak Donald",
      unitID: "15B",
      unitType: "Apartment",
      tel: "+256 795 304 493",
      profile: require("../../assets/img/dashboard/profile.png"),
    },
  ];

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: constansts.tertiaryColor,
      }}
    >
      <Header />
      <ScrollView
        style={{
          flex: 1,
          width: "100%",
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{
            width: "100%",
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
            }}
          >{`Good morning, Nehemie`}</Text>
        </View>
        <View
          style={{
            marginTop: 20,
            minHeight: 277,
            backgroundColor: "#FCB200",
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          <View
            style={{
              padding: 20,
              paddingHorizontal: 15,
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "600",
              }}
            >{`Landlord`}</Text>
          </View>

          {/* Options */}
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              paddingHorizontal: 10,
            }}
          >
            {options.map((option, i) => (
              <TouchableOpacity
                style={{
                  width: 100 / 4 - 1 + "%",
                  minHeight: 64,
                  borderRadius: 10,
                  backgroundColor: "#fff",
                  alignItems: "center",
                  paddingVertical: 5,
                }}
                key={i}
                onPress={()=>{
                  navigation.navigate('HouseDetails')
                }}
              >
                <Image
                  source={option.icon}
                  style={{
                    resizeMode: "contain",
                    width: 18,
                  }}
                />
                {/* Name */}
                <View>
                  <Text>{option.name}</Text>
                </View>
                {/* Counts */}
                <View>
                  <Text
                    style={{
                      color: "#D9D9D9",
                    }}
                  >
                    {option.counts}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={{
                width: 100 / 4 - 1 + "%",
                minHeight: 64,
                alignItems: "center",
                paddingVertical: 5,
              }}
            >
              <View
                style={{
                  width: 50,
                  minHeight: 50,
                  borderRadius: 50,
                  backgroundColor: "#fff",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingVertical: 5,
                }}
              >
                <Image
                  source={require("../../assets/img/dashboard/plus.png")}
                  style={{
                    resizeMode: "contain",
                    width: 24,
                  }}
                />
              </View>
              <View
                style={{
                  marginTop: 2,
                }}
              >
                <Text
                  style={{
                    fontWeight: "600",
                  }}
                >{`Add new`}</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Footer tools/options */}
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
              backgroundColor: constansts.secondaryColor,
              marginTop: "auto",
              padding: 10,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}
          >
            {tools.map((tool, i) => (
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: 80,
                }}
                key={i}
              >
                <Image
                  source={tool.icon}
                  style={{
                    resizeMode: "contain",
                    width: 40,
                    height: 40,
                  }}
                />
                <View
                  style={{
                    marginTop: 5,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 17,
                      color: "#fff",
                    }}
                  >
                    {tool.name}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View
          style={{
            width: "100%",
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
            }}
          >{`Top Tenants`}</Text>
        </View>
        <View
          style={{
            backgroundColor: "#ffffff",
            width: "100%",

            marginTop: 15,
            paddingVertical: 10,
          }}
        >
          <ScrollView
            directionalLockEnabled
            pinchGestureEnabled={false}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            contentContainerStyle={{
              paddingHorizontal: 10,
            }}
          >
            {topTenants.map((tentant, _i) => {
              let elments: JSX.Element[] = [];
              for (let i = 0; i < 8; i++) {
                elments.push(
                  <View
                    style={{
                      minHeight: 90,
                      width: 170.0,
                      // padding: 15.0,
                      borderRadius: 10.0,
                      marginRight: 10.0,
                    }}
                    key={i}
                  >
                    <View
                      style={{
                        width: 55,
                        height: 55,
                        backgroundColor: "#D9D9D9",
                        borderRadius: 50,
                        justifyContent: "center",
                        alignItems: "center",
                        overflow: "hidden",
                        alignSelf: "center",
                        elevation:1,
                        zIndex:1,
                      }}
                    >
                      <Image
                        source={tentant.profile}
                        style={{
                          resizeMode: "contain",
                          width: "100%",
                        }}
                      />
                    </View>
                    <View
                      style={{
                        minHeight: 90,
                        width: "100%",
                        backgroundColor: "#F3F3F3",
                        padding: 10,
                        paddingTop: 20,
                        marginTop: -20,
                        borderRadius: 10.0,
                      }}
                    >
                      <View style={{}}>
                        <Text style={{
                          fontSize: 18,
                          fontWeight: '700',
                        }}>{tentant.names}</Text>
                      </View>
                      <View style={{
                        flexDirection: 'row',
                        marginTop: 10
                      }}>
                        <Text style={{
                          fontSize: 16,
                          fontWeight: '700'
                        }}>{'Unit: '}</Text>
                        <Text style={{
                          fontSize: 16,
                          fontWeight: '300'
                        }}>{tentant.unitID}</Text>
                      </View>

                      <TouchableOpacity style={{
                        width: 40,
                        height: 40,
                        borderRadius: 50,
                        backgroundColor: constansts.primaryColor,
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        right: 10,
                        bottom: 10
                      }} onPress={()=>{
                        Linking.openURL('tel:'+tentant.tel.split(' ').join(''));
                      }}>
                        <Image source={require('../../assets/img/phone-call.png')} style={{
                          width: '60%',
                          resizeMode: 'contain'
                        }}/>
                      </TouchableOpacity>

                    </View>
                  </View>
                );
              }
              return elments;
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
