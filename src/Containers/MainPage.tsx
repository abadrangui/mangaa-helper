import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from 'react-native'
import { useTheme } from '@/Hooks'
import Sound from 'react-native-sound'

import { cardData, categoryData } from '@/Cards'
import { SafeAreaView } from 'react-native-safe-area-context'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  upperHalf: {
    borderBottomColor: '#000',
    borderBottomWidth: 2,
    flex: 1,
  },
  downHalf: {
    flex: 1,
  },
  categoryContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  categoryItem: {
    width: '30%',
    borderColor: '#000',
    borderWidth: 1,
    marginHorizontal: 6,
    marginBottom: 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  card: {
    height: '20%',
    width: '30%',
    margin: 5,
    // marginBottom: 40,
  },
  cardImage: {
    height: '100%',
  },
  backButton: {
    backgroundColor: '#ff000080',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 24,
  },
})

Sound.setCategory('Playback')

interface Item {
  name: string
  category: string
  image: any
  sound: Sound
}

interface Category {
  name: string
  key: string
  target: number
}

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState<null | Category>(
    null,
  )
  const [value1, setValue1] = useState<null | Item>(null)
  const [value2, setValue2] = useState<null | Item>(null)
  const [value3, setValue3] = useState<null | Item>(null)
  const [value4, setValue4] = useState<null | Item>(null)
  const [value5, setValue5] = useState<null | Item>(null)
  const [speaking, setSpeaking] = useState(false)
  const { Common, Fonts, Gutters, Layout } = useTheme()

  const handleItemPress = (item: Item) => {
    switch (selectedCategory?.target) {
      case 1:
        setValue1(item)
        break
      case 2:
        setValue2(item)
        break
      case 3:
        setValue3(item)
        break
      case 4:
        setValue4(item)
        break
      case 5:
        setValue5(item)
        break

      default:
        break
    }
  }

  const play = async () => {
    setSpeaking(true)
    function timeout(ms: number) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }

    if (value1) {
      const duration = value1.sound.getDuration()
      console.log('duration ', duration)
      value1.sound.play()
      await timeout(duration * 1000)
    }

    if (value2) {
      const duration = value2.sound.getDuration()
      console.log('duration ', duration)
      value2.sound.play()
      await timeout(duration * 1000)
    }

    if (value3) {
      const duration = value3.sound.getDuration()
      console.log('duration ', duration)
      value3.sound.play()
      await timeout(duration * 1000)
    }

    if (value4) {
      const duration = value4.sound.getDuration()
      console.log('duration ', duration)
      value4.sound.play()
      await timeout(duration * 1000)
    }

    if (value5) {
      const duration = value5.sound.getDuration()
      console.log('duration ', duration)
      value5.sound.play()
      await timeout(duration * 1000)
    }
    setSpeaking(false)
  }

  return (
    <SafeAreaView style={[Layout.fill]}>
      {selectedCategory === null ? (
        <View style={[styles.upperHalf]}>
          <Text style={[Fonts.textRegular]}>Categories</Text>
          <View style={[Layout.fill, styles.categoryContainer]}>
            {categoryData.map(item => (
              <TouchableOpacity
                style={styles.categoryItem}
                onPress={() => {
                  setSelectedCategory(item)
                }}
              >
                <Text style={[Fonts.textRegular]}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ) : (
        <View style={[styles.upperHalf]}>
          <Text style={[Fonts.textRegular]}>Categories</Text>
          <View style={[Layout.fill, styles.categoryContainer]}>
            {cardData
              .filter(a => a.category === selectedCategory.key)
              .map((item, index) => (
                <TouchableOpacity
                  key={`${index}-${item.name}`}
                  onPress={() => {
                    handleItemPress(item)
                    setSelectedCategory(null)
                  }}
                  style={styles.card}
                >
                  <Image
                    source={item.image}
                    resizeMode="contain"
                    style={styles.cardImage}
                  />
                  {/* <Text style={[Fonts.textRegular, Fonts.textCenter]}>{item.name}</Text> */}
                </TouchableOpacity>
              ))}
          </View>
          <TouchableOpacity
            style={[styles.backButton]}
            onPress={() => {
              setSelectedCategory(null)
            }}
          >
            <Text style={[Fonts.textRegular, Fonts.textCenter]}>Буцах</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={[styles.downHalf]}>
        <View
          style={[
            Layout.fill,
            Layout.colCenter,
            Gutters.smallHPadding,
            styles.downHalf,
          ]}
        >
          <View>
            {value1 ? (
              <Text style={[Fonts.textRegular]}>{value1.name}</Text>
            ) : (
              <></>
            )}
          </View>
          <View>
            {value2 ? (
              <Text style={[Fonts.textRegular]}>{value2.name}</Text>
            ) : (
              <></>
            )}
          </View>
          <View>
            {value3 ? (
              <Text style={[Fonts.textRegular]}>{value3.name}</Text>
            ) : (
              <></>
            )}
          </View>
          <View>
            {value4 ? (
              <Text style={[Fonts.textRegular]}>{value4.name}</Text>
            ) : (
              <></>
            )}
          </View>
          <View>
            {value5 ? (
              <Text style={[Fonts.textRegular]}>{value5.name}</Text>
            ) : (
              <></>
            )}
          </View>
        </View>
        <TouchableOpacity
          style={[styles.backButton]}
          onPress={() => {
            play()
          }}
          disabled={speaking}
        >
          {speaking ? (
            <ActivityIndicator />
          ) : (
            <Text style={[Fonts.textRegular, Fonts.textCenter]}>Ярих</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView >
  )
}

export default HomePage
