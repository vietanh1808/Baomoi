import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'
import { SearchScreen } from '../Screen'
import BottomTab from './BottomTab'

const Stack = createStackNavigator()

export default function MainNavigation() {
  const forSlide = ({ current, next, inverted, layouts: { screen } }) => {
    const progress = Animated.add(
      current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
      next
        ? next.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: 'clamp',
          })
        : 0,
    )

    return {
      cardStyle: {
        transform: [
          {
            translateX: Animated.multiply(
              progress.interpolate({
                inputRange: [0, 1, 2],
                outputRange: [
                  screen.width, // Focused, but offscreen in the beginning
                  0, // Fully focused
                  screen.width * -0.3, // Fully unfocused
                ],
                extrapolate: 'clamp',
              }),
              inverted,
            ),
          },
        ],
      },
    }
  }

  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: forSlide,
      }}
    >
      <Stack.Screen name="Main" component={BottomTab} />
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})
