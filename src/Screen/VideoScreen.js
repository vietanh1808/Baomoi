import React, { useEffect, useRef, useState } from 'react'
import {
  Button,
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { Video } from 'expo-av'
import Images from '../asserts/Images'
import Videos from '../asserts/Videos'

const HEIGHT_SCREEN = Dimensions.get('window').height

export default function VideoScreen({ navigation }) {
  const videoRef = useRef(null)
  const dragBegin = useRef(0)
  const scrollRef = useRef()
  const [status, setStatus] = useState()

  useEffect(() => {
    return () => {}
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        style={{ flex: 1 }}
        onScroll={(event) => {
          const offset = event.nativeEvent.contentOffset
        }}
        onScrollBeginDrag={(event) => {
          dragBegin.current = event.nativeEvent.contentOffset.y
          console.log('BeginDrag: ', event.nativeEvent.contentOffset.y)
        }}
        onScrollEndDrag={(event) => {
          const offsetY = event.nativeEvent.contentOffset.y
          const heightVerified = HEIGHT_SCREEN / 5 + HEIGHT_SCREEN
          const SCREEN = HEIGHT_SCREEN / offsetY
          if (offsetY > heightVerified) {
            console.log('Enable To Next Element')
          } else {
            console.log('Nope')
          }
        }}
      >
        {Object.values(Videos).map((item, index) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              height: HEIGHT_SCREEN,
              alignItems: 'center',
            }}
            key={index}
          >
            <Video
              ref={videoRef}
              source={item}
              useNativeControls
              resizeMode="contain"
              isLooping
              onPlaybackStatusUpdate={(status) => setStatus(() => status)}
              style={{
                width: 320,
                height: 200,
              }}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#fff',
    margin: 0,
    flexGrow: 1,
  },
})
