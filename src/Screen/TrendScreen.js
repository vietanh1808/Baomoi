import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

export default function TrendScreen() {
  return (
    <View style={styles.container}>
      <Text>TrendScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
