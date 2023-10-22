import React from 'react'
import { Button, Text } from 'react-native'

import styled from '@emotion/native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useQuery } from 'react-query'

import { Route } from '../navigation/routes'
import { RootStackParamList } from '../navigation/types'
import { useThemeState } from '../state'

export type HomeScreenNavigationType = StackNavigationProp<
  RootStackParamList,
  Route.Home
>

export const HomeScreen = () => {
  const { data, isLoading } = useQuery<{ allow_forking: boolean }>({
    queryFn: () =>
      fetch('https://api.github.com/repos/tannerlinsley/react-query').then(
        res => res.json(),
      ),
  })

  const swithTheme = useThemeState(state => state.switchTheme)
  const navigation = useNavigation<HomeScreenNavigationType>()

  const goToSettings = () => navigation.replace(Route.Settings)

  const goToDetails = () => navigation.replace(Route.Details, { id: '1' })
  console.log(data?.allow_forking, isLoading)
  return (
    <HomeContainer>
      <Text>Home Screen</Text>
      <Button onPress={goToDetails} title="Go to details" />
      <Button onPress={goToSettings} title="Go to settings" />
      <Button onPress={swithTheme} title="SwitchTheme" />
    </HomeContainer>
  )
}

const HomeContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary};
`
