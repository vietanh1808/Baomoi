import React, { useEffect, useRef } from 'react'
import { StyleSheet, Text, View, Dimensions, Animated } from 'react-native'

export default function FollowScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start()
    return () => {
      fadeAnim
    }
  }, [fadeAnim])

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <Text style={{ fontSize: 20, fontWeight: '700' }}>Hello World!</Text>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
