import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HeaderTabBar from '../Components/HeaderTabBar'
import {
  FollowScreen,
  HotNewsScreen,
  FootballVnScreen,
  NewsScreen,
  TechnologyScreen,
  PersonalScreen,
  HomeScreen,
  SettingScreen,
} from '../Screen/index'

const Tab = createMaterialTopTabNavigator()
const Stack = createStackNavigator()

export default function NewsNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{}}
      tabBar={(props) => <HeaderTabBar {...props} />}
    >
      <Tab.Screen name="Follows" component={FollowScreen} options={{}} />
      <Tab.Screen name="HotNews" component={HotNewsScreen} options={{}} />
      <Tab.Screen name="News" component={NewsScreen} options={{}} />
      <Tab.Screen name="FootballVn" component={FootballVnScreen} options={{}} />
      <Tab.Screen name="Technology" component={TechnologyScreen} options={{}} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})
