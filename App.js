import { StyleSheet, StatusBar, AppRegistry } from 'react-native'
import React, { useMemo } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomTab from './src/Navigations/BottomTab'
import MainNavigation from './src/Navigations/MainNavigation'
export default function App() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
})
