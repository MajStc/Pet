import React, { useEffect, useState } from 'react'
import { Button } from 'react-native'

import styled from '@emotion/native'
import { addEventListener } from '@react-native-community/netinfo'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import DeviceInfo from 'react-native-device-info'

import { useMoviesGet } from '../api/endpoints/movies/useMoviesGet'
import { Route } from '../navigation/routes'
import { RootStackParamList } from '../navigation/types'
import { useThemeState } from '../state'
import { Text } from '../ui/Text'

export type HomeScreenNavigationType = StackNavigationProp<
  RootStackParamList,
  Route.Home
>

export const HomeScreen = () => {
  const { data, status, refetch } = useMoviesGet()
  const [connection, setConnection] = useState<string>('')

  const swithTheme = useThemeState(state => state.switchTheme)
  const navigation = useNavigation<HomeScreenNavigationType>()

  const goToSettings = () => navigation.replace(Route.Settings)

  const goToDetails = () => navigation.replace(Route.Details, { id: '1' })

  const goToMovies = () => navigation.replace(Route.Movies)

  useEffect(() => {
    const unsubscribe = addEventListener(state => {
      setConnection(JSON.stringify(state))
    })

    return () => unsubscribe()
  }, [])

  return (
    <HomeContainer>
      <Text size="big" variant="header">
        Home Screen as header big
      </Text>
      <Text size="small" variant="body">
        Home Screen as body small
      </Text>
      <Text size="small" variant="body">
        {DeviceInfo.getBuildNumber()}
      </Text>
      <Text size="small" variant="body">
        {connection}
      </Text>
      <Text size="small" variant="body">
        {JSON.stringify(status)}
        {JSON.stringify(data)}
      </Text>
      <Button onPress={() => refetch()} title="Refetch" />
      <Button onPress={goToDetails} title="Go to details" />
      <Button onPress={goToSettings} title="Go to settings" />
      <Button onPress={goToMovies} title="Go to movies" />
      <Button onPress={swithTheme} title="SwitchTheme" />
    </HomeContainer>
  )
}

const HomeContainer = styled.ScrollView`
  flex: 1;
  /* align-items: center;
  justify-content: center; */
  background-color: ${({ theme }) => theme.colors.secondary};
`
