import React from 'react'
import { StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'

import { RootStackNavigator } from './RootStackNavigator'

export const NavigationRoot = () => {
  return (
    <NavigationContainer>
      <StatusBar animated />
      <RootStackNavigator />
    </NavigationContainer>
  )
}
