import React, { createRef, useEffect, useRef, useState } from 'react'
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
import CarouselVertical from '../Components/CarouselVertical'

const statusBarHeight = StatusBar.currentHeight
const setHeight = 300

export default function VideoScreen({ navigation }) {
  const videoRef = useRef()
  const videoListRef = useRef([])
  const [status, setStatus] = useState()

  useEffect(() => {
    return () => {}
  }, [])

  const handlePlayback = (status) => {}
  const handleReadyDisplay = (status) => {}
  const handlePress = () => {}
  const handleOnLoadStart = (index) => {
    videoListRef.current[index] = createRef()
  }

  return (
    <View style={styles.container}>
      <CarouselVertical height={setHeight}>
        {Object.values(Videos).map((item, index) => (
          <Video
            ref={videoListRef.current[index]}
            source={item}
            key={index}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={handlePlayback}
            onReadyForDisplay={handleReadyDisplay}
            onLoadStart={() => handleOnLoadStart(index)}
            style={{
              width: 320,
              height: setHeight,
              alignSelf: 'center',
              marginBottom: 20,
            }}
            onLayout={(event) => {}}
          />
        ))}
      </CarouselVertical>
      <Button title="Press" onPress={handlePress} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: statusBarHeight,
    backgroundColor: '#fff',
  },
})
