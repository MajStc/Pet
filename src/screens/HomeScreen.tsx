import React from 'react'
import { Button } from 'react-native'

import styled from '@emotion/native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import * as Sentry from '@sentry/react-native'

import { useReposTannerlinsleyReactQueryGet } from '../api/endpoints/repos/tannerlinsley/react-query/useReposTannerlinsleyReactQueryGet'
import { Route } from '../navigation/routes'
import { RootStackParamList } from '../navigation/types'
import { useThemeState } from '../state'
import { Text } from '../ui/Text'

export type HomeScreenNavigationType = StackNavigationProp<
  RootStackParamList,
  Route.Home
>

export const HomeScreen = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, isLoading } = useReposTannerlinsleyReactQueryGet()

  const swithTheme = useThemeState(state => state.switchTheme)
  const navigation = useNavigation<HomeScreenNavigationType>()

  const goToSettings = () => navigation.replace(Route.Settings)

  const goToDetails = () => navigation.replace(Route.Details, { id: '1' })

  const nullArray: any = null

  return (
    <HomeContainer>
      <Text size="big" variant="header">
        Home Screen as header big
      </Text>
      <Text size="small" variant="body">
        Home Screen as body small
      </Text>
      <Button onPress={goToDetails} title="Go to details" />
      <Button onPress={goToSettings} title="Go to settings" />
      <Button onPress={swithTheme} title="SwitchTheme" />
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
    </HomeContainer>
  )
}

const HomeContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary};
`
