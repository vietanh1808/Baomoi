import React, {
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
  useEffect,
  useCallback,
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

const WIDTH_WINDOW = Dimensions.get('window').width

function CarouselVertical(
  {
    data,
    horizontal,
    height = null,
    children,
    width = WIDTH_WINDOW,
    auto = false,
    frameDrag = 3,
  },
  ref,
) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const interval = useRef()
  const scrollRef = useRef()
  const tagScreen = useRef()

  useImperativeHandle(ref, () => ({
    scrollToEnd() {
      scrollRef.current.scrollToEnd({ animated: true })
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
      scrollRef.current.scrollTo({
        x: selectedIndex * Dimensions.get('window').width,
        y: 0,
        animated: true,
      })
    } else {
      scrollRef.current.scrollTo({
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

  const handleScrollHorizontalEnd = useCallback((event) => {
    const layout = event.nativeEvent.layoutMeasurement.width
    const offset = event.nativeEvent.contentOffset.x
    const index = Math.floor(offset / layout)
    setSelectedIndex(index)
  }, [])

  const handelScrollVerticalEnd = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y
    const screen = event.nativeEvent.layoutMeasurement.height
    const heightNextVerified = screen * tagScreen.current + screen / frameDrag
    const heightPrevVerified = screen * tagScreen.current - screen / frameDrag

    if (offsetY > heightNextVerified) {
      scrollRef.current.scrollTo({
        x: WIDTH_WINDOW,
        y: screen * (tagScreen.current + 1),
        animated: true,
      })
      setSelectedIndex(tagScreen.current + 1)
    } else {
      if (offsetY < heightPrevVerified) {
        scrollRef.current.scrollTo({
          x: WIDTH_WINDOW,
          y: screen * (tagScreen.current - 1),
          animated: true,
        })
        setSelectedIndex(tagScreen.current - 1)
      } else {
        scrollRef.current.scrollTo({
          x: WIDTH_WINDOW,
          y: screen * tagScreen.current,
          animated: true,
        })
        setSelectedIndex(tagScreen.current)
      }
    }
  }

  const handleScrollVerticalBegin = (event) => {
    const screen = event.nativeEvent.layoutMeasurement.height
    const offsetY = event.nativeEvent.contentOffset.y
    tagScreen.current = Math.floor(offsetY / screen)
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
        ref={scrollRef}
        horizontal={horizontal}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onScrollEndDrag={
          horizontal ? handleScrollHorizontalEnd : handelScrollVerticalEnd
        }
        onScrollBeginDrag={handleScrollVerticalBegin}
        decelerationRate={0}
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
