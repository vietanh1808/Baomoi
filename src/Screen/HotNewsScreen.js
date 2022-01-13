import React, { useImperativeHandle, useRef, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CarouselVertical from '../Components/CarouselVertical'
import ElementVerticalCarousel from '../Components/ElementVerticalCarousel'

DATA = [
  <ElementVerticalCarousel icon="wb-cloudy" text="17.C - H.Thanh Trì" />,
  <ElementVerticalCarousel icon="calendar-month" text="T3, 3 tháng 1, 2022" />,
]

function HotNewsScreen() {
  const [interval, setInterval] = useState(true)
  const scrollviewRef = useRef()

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#4287f5',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <CarouselVertical
          ref={scrollviewRef}
          horizontal={true}
          height={40}
          width={300}
          auto={false}
        >
          <ElementVerticalCarousel
            size={23}
            icon="wb-cloudy"
            text="17.C - H.Thanh Trì"
            height={40}
          />
          <ElementVerticalCarousel
            size={23}
            icon="calendar-today"
            text="T3, 3 tháng 1, 2022"
            height={40}
          />
        </CarouselVertical>
        <Image
          source={require('../../assets/360.png')}
          style={{ width: 50, height: 30, borderRadius: 10, marginRight: 20 }}
          resizeMode="contain"
        />
      </View>

      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => scrollviewRef.current.scrollToEnd()}
        >
          <Text style={styles.textTouchable}>End</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => scrollviewRef.current.next()}
        >
          <Text style={styles.textTouchable}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.touchable,
            { backgroundColor: interval ? '#f02311' : '#5996f7' },
          ]}
          onPress={() => {
            setInterval(!interval)
            return interval
              ? scrollviewRef.current.pause()
              : scrollviewRef.current.continue()
          }}
        >
          <Text style={[styles.textTouchable]}>
            {interval ? 'Pause' : 'Continue'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
  },
  touchable: {
    width: 100,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#5996f7',
    marginLeft: 10,
    borderRadius: 10,
    elevation: 7,
  },
  textTouchable: {
    color: '#fff',
    fontSize: 15,
  },
})
export default HotNewsScreen
