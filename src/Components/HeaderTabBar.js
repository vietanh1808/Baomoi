import React, { memo, useEffect, useMemo, useState } from 'react'
import {
  Image,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  Touchable,
  TouchableOpacity,
  FlatList,
  TouchableHighlight,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import topBarList from '../Contants/TopBarList'

function HeaderTabBar({ navigation, state, descriptors, position }) {
  const renderTabBars = ({ item, index }) => {
    const opacityCheck = index === state.index
    return (
      <TouchableOpacity
        style={styles.itemTabBars}
        onPress={() => handleTouchItem(item.tabName)}
      >
        {/* <View> */}
        <Text style={[styles.textTabBars, { opacity: opacityCheck ? 1 : 0.6 }]}>
          {item.frontName}
        </Text>
        {<View style={[styles.dot, { opacity: opacityCheck ? 1 : 0 }]} />}
        {/* </View> */}
      </TouchableOpacity>
    )
  }

  const handleTouchItem = (screen) => {
    // setOpacityScreen('')
    return navigation.navigate(screen)
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', marginRight: 15, paddingLeft: 10 }}>
        <FlatList
          renderItem={renderTabBars}
          data={topBarList}
          horizontal={true}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
        <TouchableOpacity
          style={{ paddingHorizontal: 5 }}
          onPress={() => navigation.navigate('Search')}
        >
          <Icon name="search" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flexDirection: 'column',
    paddingVertical: 5,
    backgroundColor: '#087ead',
    height: 40,
  },
  header: {},
  textTabBars: {
    paddingRight: 10,
    fontSize: 14,
    color: '#fff',
  },
  itemTabBars: {
    alignItems: 'center',
    textAlignVertical: 'center',
  },
  dot: {
    borderRadius: 30,
    height: 1,
    backgroundColor: '#fff',
    width: '50%',
    marginRight: 10,
  },
})

export default memo(HeaderTabBar)
