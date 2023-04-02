import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { constansts } from "../../../lib/constants";

export default function HouseDetails() {
  let houses = [
    {
      name: "Lorem Ipsum",
      address: "Nakawa, Kampala",
      price: 550,
      currencySymbol: "$",
      currencyName: "USD",
      availability: true,
      image: require("../../../assets/img/house.png"),
    },
  ];
  return (
    <ScrollView contentContainerStyle={{ padding: 10 }}>
      {houses.map((house, _i) => {
        let elements: JSX.Element[] = [];
        for (let i = 0; i <= 15; i++) {
          elements.push(
            <TouchableOpacity activeOpacity={0.5}
              style={{
                padding: 10,
                borderRadius: 15,
                width: "100%",
                backgroundColor: "#fff",
                marginBottom: 10,
                flexDirection: "row",
                flexWrap: "wrap",
              }}
              key={i + _i}
            >
              <View
                style={{
                  width: 119,
                  height: 80,
                  overflow: "hidden",
                  borderRadius: 10,
                }}
              >
                <Image
                  source={house.image}
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "contain",
                  }}
                />
              </View>
              <View
                style={{
                  marginLeft: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "600",
                    marginBottom:5
                  }}
                >
                  {house.name}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "300",
                    marginBottom:5,
                    color: '#777'
                  }}
                >
                  {house.address}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "300",
                    marginBottom:5,
                    color: '#777'
                  }}
                >
                  {house.currencySymbol}
                  {house.price}
                </Text>
              </View>
              <View style={{
                position: 'absolute',
                right: 20,
                top: '40%',
                backgroundColor: i%2?'#D9D9D9': constansts.primaryColor,
                padding: 10,
                borderRadius:8
              }}>
                <Text style={{
                    color: i%2?'#777777':'#000'
                }}>{i%2?'Booked':'Availabe'}</Text>
              </View>
            </TouchableOpacity>
          );
        }
        return elements;
      })}
    </ScrollView>
  );
}
