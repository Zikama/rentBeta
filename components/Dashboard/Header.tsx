import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { Image, TextInput, TouchableOpacity, View } from 'react-native'
import { constansts } from '../../lib/constants'

export default function Header() {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
  return (
    <View
        style={{
          width: "100%",
          height: 60,
          padding: 10,
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <TextInput
        cursorColor={constansts.primaryColor}
        placeholder="Search"
        returnKeyType="done"
        keyboardAppearance="default"
          style={{
            flex: 0.94,
            height: 40,
            backgroundColor: "#D9D9D9",
            borderRadius: 50,
            paddingHorizontal: 10,
          }}
        />
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            backgroundColor: "#D9D9D9",
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onPress={()=>{
            navigation.navigate("Dashboard", {
                screen: "NotificationsScreen"
            })
          }}
        >
          <Image source={require('../../assets/img/tabs/bell-black.png')} style={{
            width:'60%',

          }} resizeMode='contain' />
          <View style={{
            position: 'absolute',
            top: 0,
            right: 0,
            backgroundColor: '#EF3C92',
            width:12,
            height:12,
            borderRadius: 50,
          }} />
        </TouchableOpacity>
      </View>
  )
}