import React from 'react'

import { RootStack } from './RootStack'
import { Route } from './routes'
import {
  DetailsScreen,
  HomeScreen,
  MoviesScreen,
  SettingsScreen,
} from '../screens'

export const RootStackNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName={Route.Home}>
      <RootStack.Screen name={Route.Home} component={HomeScreen} />
      <RootStack.Screen name={Route.Details} component={DetailsScreen} />
      <RootStack.Screen name={Route.Settings} component={SettingsScreen} />
      <RootStack.Screen name={Route.Movies} component={MoviesScreen} />
    </RootStack.Navigator>
  )
}
