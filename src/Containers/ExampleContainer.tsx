import React, { useState, useEffect } from 'react'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Brand } from '@/Components'
import { useTheme } from '@/Hooks'
import { useLazyFetchOneQuery } from '@/Services/modules/users'
import { changeTheme, ThemeState } from '@/Store/Theme'

const ExampleContainer = () => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()

  const [userId, setUserId] = useState('9')
  const [
    fetchOne,
    { data, isSuccess, isLoading, isFetching, error },
  ] = useLazyFetchOneQuery()

  useEffect(() => {
    fetchOne(userId)
  }, [fetchOne, userId])

  const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
    dispatch(changeTheme({ theme, darkMode }))
  }

  return (
    <>
      <ScrollView
        style={Layout.fill}
        contentContainerStyle={[
          Layout.fill,
          Layout.colCenter,
          Gutters.smallHPadding,
        ]}
      >
        <Text style={[Fonts.textRegular, Gutters.smallBMargin]}>
          DarkMode :
        </Text>

        <TouchableOpacity
          style={[Common.button.rounded, Gutters.regularBMargin]}
          onPress={() => onChangeTheme({ darkMode: null })}
        >
          <Text style={Fonts.textRegular}>Auto</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[Common.button.outlineRounded, Gutters.regularBMargin]}
          onPress={() => onChangeTheme({ darkMode: true })}
        >
          <Text style={Fonts.textRegular}>Dark</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[Common.button.outline, Gutters.regularBMargin]}
          onPress={() => onChangeTheme({ darkMode: false })}
        >
          <Text style={Fonts.textRegular}>Light</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  )
}

export default ExampleContainer
