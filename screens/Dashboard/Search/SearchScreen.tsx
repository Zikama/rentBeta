import { View, Text, SafeAreaView, Platform } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants';

export default function SearchScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.select({android:Constants.statusBarHeight, ios: 0}),
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <StatusBar style='dark'/>
      <Text>SearchScreen</Text>
</SafeAreaView>
  )
}