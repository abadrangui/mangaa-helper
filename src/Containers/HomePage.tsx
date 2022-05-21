import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native'
import { useTheme } from '@/Hooks'
import Sound from 'react-native-sound'
import Swiper from 'react-native-swiper'

import { cardData, categoryData } from '@/Cards'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  categoryContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
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
})

Sound.setCategory('Playback')

const HomePage = () => {
  const { Fonts, Gutters, Layout } = useTheme()

  return (
    <>
      <ScrollView
        style={Layout.fill}
        contentContainerStyle={[
          Layout.fill,
          Layout.colCenter,
          Gutters.smallHPadding,
        ]}
        keyboardShouldPersistTaps="always"
      >
        <Swiper>
          {categoryData.map(cat => (
            <View key={cat.key}>
              <Text style={[Fonts.textLarge, Fonts.textCenter]}>
                {cat.name}
              </Text>
              <View style={styles.categoryContainer}>
                {cardData
                  .filter(a => a.category === cat.key)
                  .map((item, index) => (
                    <TouchableOpacity
                      key={`${index}-${item.name}`}
                      onPress={() => {
                        console.log('playing ', item.name)
                        item.sound.play()
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
            </View>
          ))}
        </Swiper>
      </ScrollView>
    </>
  )
}

export default HomePage
