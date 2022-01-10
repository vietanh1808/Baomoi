import { Video } from 'expo-av'
import React, { useState } from 'react'
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Dimensions,
  TouchableOpacity,
  Pressable,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const WORDS_SEO = [
  'CSTO',
  'Mỹ',
  'vacxin',
  'hội đồng nhân dân',
  'MOLUPIRAVIR',
  'australie',
  'An Giang',
  'Bộ y tế',
]

export default function SearchScreen({ navigation }) {
  const [text, setText] = useState('')
  const video = React.useRef(null)
  const [status, setStatus] = React.useState({})

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={[styles.inputView]}>
          <Icon
            name="search"
            size={25}
            style={{ paddingHorizontal: 8 }}
            color={'#fff'}
          />
          <TextInput
            value={text}
            onChangeText={(text) => setText(text)}
            placeholder="Tìm kiếm"
            inlineImageLeft="search_icon"
            placeholderTextColor={'#fff'}
            style={{ color: '#fff', flex: 1, paddingRight: 10 }}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Text
            style={{
              color: '#000',
              fontSize: 16,
              paddingLeft: 10,
            }}
          >
            Đóng
          </Text>
        </TouchableOpacity>
      </View>

      {/* SECTION 2 */}
      <View style={styles.section2}>
        <Text style={[styles.textSection2]}>TÌM NHANH</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {WORDS_SEO.map((value, index) => (
            <TouchableOpacity key={index}>
              <Text style={[styles.textSection2, styles.textSeo]}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* SECTION 3 */}
      <View style={styles.section3}>
        <Text>NÓNG 24H</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  inputView: {
    width: Dimensions.get('window').width - 100,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8f8f8f',
    padding: 3,
    margin: 7,
    marginLeft: 15,
    borderRadius: 8,
  },
  textSection2: { color: '#919191' },
  section2: {
    padding: 15,
    backgroundColor: '#fff',
  },
  textSeo: {
    padding: 3,
    paddingHorizontal: 7,
    borderWidth: 1,
    marginRight: 10,
    marginTop: 15,
  },
  section3: {
    backgroundColor: '#fff',
    marginTop: 10,
  },
})
