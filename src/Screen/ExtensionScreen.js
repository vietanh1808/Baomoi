import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

export default function ExtensionScreen() {
  return (
    <View style={styles.container}>
      <Text>Extension</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
})
