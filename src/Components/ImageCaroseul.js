import React, { useEffect, useRef, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Button,
  Animated,
} from 'react-native'

const DEVICE_WIDTH = Dimensions.get('window').width

export default function ImageCaroseul({ data, horizontal, showDot }) {
  const scrollviewRef = useRef()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const interval = useRef()

  const next = () => {
    setSelectedIndex((prev) => (prev >= data.length - 1 ? 0 : prev + 1))
    scrollviewRef.current.scrollTo({
      x: selectedIndex * DEVICE_WIDTH,
      y: 0,
      animated: true,
    })
  }

  useEffect(() => {
    // setLoopCaroseul()
    return () => {
      clearInterval(interval.current)
      interval.current = null
    }
  }, [])

  const momentumScroll = (event) => {
    if (horizontal) {
      const layout = event.nativeEvent.layoutMeasurement.width
      const offset = event.nativeEvent.contentOffset.x
      const index = Math.floor(offset / layout)
      setSelectedIndex(index)
    } else {
      const layout = event.nativeEvent.layoutMeasurement.width
      const offset = event.nativeEvent.contentOffset.y
      const index = Math.floor(offset / layout)
      setSelectedIndex(index)
    }
  }
  const loopCaroseul = () => {
    if (!interval.current) {
      setLoopCaroseul()
    } else {
      clearInterval(interval.current)
      interval.current = null
    }
  }

  const setLoopCaroseul = () => {
    if (!interval.current) {
      const id = setInterval(() => {
        console.log(selectedIndex)
        scrollviewRef.current.scrollTo({
          x: selectedIndex * DEVICE_WIDTH,
          y: 0,
          animated: true,
        })
        setSelectedIndex((prev) => (prev >= data.length - 1 ? 0 : prev + 1))
      }, 1000)
      interval.current = id
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollviewRef}
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onMomentumScrollEnd={momentumScroll}
      >
        {data.map((item, index) => (
          <Text
            style={{
              width: Dimensions.get('screen').width,
              textAlign: 'center',
              textAlignVertical: 'center',
              height: 100,
            }}
            key={index}
          >
            News{item}
          </Text>
        ))}
      </ScrollView>
      <Button
        title={interval.current === null ? 'Start' : 'Stop'}
        onPress={() => loopCaroseul()}
      />
      <Button title="End" onPress={() => scrollviewRef.current.scrollToEnd()} />
      <Button title="Next" onPress={() => next()} />
      <Text>Selected Index: {selectedIndex}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    // height: 100,
  },
})
