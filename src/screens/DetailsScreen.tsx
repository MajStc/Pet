import React from 'react'
import { Button, Text, View } from 'react-native'

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { Route } from '../navigation/routes'
import { RootStackParamList } from '../navigation/types'

export type DetailsScreenNavigationType = StackNavigationProp<
  RootStackParamList,
  Route.Details
>

export type DetailsScreenRouteType = RouteProp<
  RootStackParamList,
  Route.Details
>

export const DetailsScreen = () => {
  const navigation = useNavigation<DetailsScreenNavigationType>()
  const route = useRoute<DetailsScreenRouteType>()

  const goToSettings = () => navigation.replace(Route.Settings)

  const goToHomeScreen = () => navigation.replace(Route.Home)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen {route.params.id}</Text>
      <Button onPress={goToSettings} title="Go to settings" />
      <Button onPress={goToHomeScreen} title="Go to home" />
    </View>
  )
}
