import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

export default function ProfileScreen() {
  return (

    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <StatusBar style='dark'/>

      <Text>ProfileScreen</Text>
    </SafeAreaView>

  )
}