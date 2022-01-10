import React, {
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
  useEffect,
} from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Animated,
  PanResponder,
} from 'react-native'

const WIDTH_SCREEN = Dimensions.get('window').width

function CarouselVertical(
  {
    data,
    horizontal,
    height = null,
    children,
    width = WIDTH_SCREEN,
    auto = true,
  },
  ref,
) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const interval = useRef()
  const scrollViewRef = useRef()

  useImperativeHandle(ref, () => ({
    scrollToEnd() {
      scrollViewRef.current.scrollToEnd({ animated: true })
    },
    next() {
      handleNextElement()
    },
    pause() {
      interval.current && clearInterval(interval.current)
      interval.current = null
    },
    continue() {
      setNewInterval()
    },
  }))

  const handleNextElement = () => {
    setSelectedIndex((prev) => (prev >= children.length - 1 ? 0 : prev + 1))
    if (horizontal) {
      scrollViewRef.current.scrollTo({
        x: selectedIndex * Dimensions.get('window').width,
        y: 0,
        animated: true,
      })
    } else {
      scrollViewRef.current.scrollTo({
        x: 0,
        y: height * selectedIndex,
        animated: true,
      })
    }
  }

  const setNewInterval = () => {
    const id = setInterval(() => {
      handleNextElement()
      console.log('...')
    }, 2000)
    interval.current = id
  }

  const handleScroll = (event) => {
    if (horizontal) {
      const layout = event.nativeEvent.layoutMeasurement.width
      const offset = event.nativeEvent.contentOffset.x
      const index = Math.floor(offset / layout)
      setSelectedIndex(index)
    } else {
      const layout = height
      const offset = event.nativeEvent.contentOffset.y
      const index = Math.floor(offset / layout)
      setSelectedIndex(index)
    }
  }

  // Set Interval auto Scrollview When Mounted
  useEffect(() => {
    auto && setNewInterval()
    return () => {
      clearInterval(interval.current)
    }
  }, [])

  return (
    <View
      style={[
        styles.container,
        { height: height === null ? 'auto' : height, width: width },
      ]}
    >
      <ScrollView
        ref={scrollViewRef}
        horizontal={horizontal}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        style={{ width: width }}
      >
        {children}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  text: {
    width: Dimensions.get('screen').width,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
})
export default forwardRef(CarouselVertical)
