import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { RootStackNavigator } from './RootStackNavigator'

export const NavigationRoot = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  )
}
