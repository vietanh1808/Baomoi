import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function ElementVerticalCarousel({ icon, text, size, height }) {
  return (
    <View style={[styles.container, { height: height }]}>
      <Icon name={icon} size={size} color="#fff" style={{ paddingLeft: 10 }} />
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    alignItems: 'center',
  },
  text: { color: '#fff', fontSize: 15, paddingHorizontal: 10 },
})
