import React, { createContext, useEffect } from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import NewsNavigation from './NewsNavigation'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { ExtensionScreen, TrendScreen, VideoScreen } from '../Screen'

const Tab = createBottomTabNavigator()
const colorCommon = '#969696'
const colorGreen = '#1aba52'

export default function BottomTab({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Tin tức"
        component={NewsNavigation}
        options={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <MaterialIcons
                name="article"
                size={27}
                color={focused ? colorGreen : colorCommon}
              />
            )
          },
          tabBarLabel: ({ focused, color }) => {
            const colorResult = focused ? colorGreen : colorCommon
            return (
              <Text style={[styles.textTabBar, { color: colorResult }]}>
                Tin tức
              </Text>
            )
          },
        })}
      />
      <Tab.Screen
        name="Video"
        component={VideoScreen}
        options={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <FontAwesome5
                name="play"
                size={25}
                color={focused ? colorGreen : colorCommon}
              />
            )
          },
          tabBarLabel: ({ focused, color }) => {
            const colorResult = focused ? colorGreen : colorCommon
            return (
              <Text style={[styles.textTabBar, { color: colorResult }]}>
                Video
              </Text>
            )
          },
        })}
      />
      <Tab.Screen
        name="Xu hướng"
        component={TrendScreen}
        options={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <FontAwesome5
                name="chart-line"
                size={25}
                color={focused ? colorGreen : colorCommon}
              />
            )
          },
          tabBarLabel: ({ focused, color }) => {
            const colorResult = focused ? colorGreen : colorCommon
            return (
              <Text style={[styles.textTabBar, { color: colorResult }]}>
                Xu hướng
              </Text>
            )
          },
        })}
      />
      <Tab.Screen
        name="Tiện ích"
        component={ExtensionScreen}
        options={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <MaterialIcons
                name="grid-view"
                size={27}
                color={focused ? colorGreen : colorCommon}
              />
            )
          },
          tabBarLabel: ({ focused, color }) => {
            const colorResult = focused ? colorGreen : colorCommon
            return (
              <Text style={[styles.textTabBar, { color: colorResult }]}>
                Tiện ích
              </Text>
            )
          },
        })}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  textTabBar: { fontSize: 12, fontWeight: '700' },
})
