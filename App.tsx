import React from 'react'

import { ThemeProvider } from '@emotion/react'
import { QueryClientProvider } from '@tanstack/react-query'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { withSentry } from './sentry'
import { queryClient } from './src/api'
import { runMockServer } from './src/api/mirage'
import { NavigationRoot } from './src/navigation'
import { useThemeState } from './src/state'
import { theme } from './src/theme'

runMockServer()

function App(): JSX.Element {
  const themeType = useThemeState(state => state.theme)

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme(themeType)}>
        <SafeAreaProvider>
          <NavigationRoot />
        </SafeAreaProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default withSentry(App)
