import React from 'react'
import { Button, Text, View } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import * as Sentry from '@sentry/react-native'

import { Route } from '../navigation/routes'
import { RootStackParamList } from '../navigation/types'

export type SettingsScreenNavigationType = StackNavigationProp<
  RootStackParamList,
  Route.Details
>

export const SettingsScreen = () => {
  const navigation = useNavigation<SettingsScreenNavigationType>()

  const goToDetails = () => navigation.replace(Route.Details, { id: '1' })

  const goToHomeScreen = () => navigation.replace(Route.Home)

  const nullArray: any = null

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Button onPress={goToDetails} title="Go to Details" />
      <Button onPress={goToHomeScreen} title="Go to Home" />
      <Button
        onPress={() => {
          Sentry.nativeCrash()
        }}
        title="Native crash"
      />
      <Button
        onPress={() => {
          nullArray.forEach()
        }}
        title="JS crash"
      />
    </View>
  )
}
