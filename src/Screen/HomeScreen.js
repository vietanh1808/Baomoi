import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
})
