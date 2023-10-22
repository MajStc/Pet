import React from 'react'
import { Button, Text } from 'react-native'

import styled from '@emotion/native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { Route } from '../navigation/routes'
import { RootStackParamList } from '../navigation/types'

export type HomeScreenNavigationType = StackNavigationProp<
  RootStackParamList,
  Route.Home
>

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationType>()

  const goToSettings = () => navigation.replace(Route.Settings)

  const goToDetails = () => navigation.replace(Route.Details, { id: '1' })

  return (
    <HomeContainer>
      <Text>Home Screen</Text>
      <Button onPress={goToDetails} title="Go to details" />
      <Button onPress={goToSettings} title="Go to settings" />
    </HomeContainer>
  )
}

const HomeContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary};
`
