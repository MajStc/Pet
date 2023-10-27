import React from 'react'

import { ThemeProvider } from '@emotion/react'
import { QueryClientProvider } from '@tanstack/react-query'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { queryClient } from './src/api'
import { NavigationRoot } from './src/navigation'
import { useThemeState } from './src/state'
import { darkTheme, lightTheme } from './src/theme'

function App(): JSX.Element {
  const themeType = useThemeState(state => state.theme)

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={themeType === 'dark' ? darkTheme : lightTheme}>
        <SafeAreaProvider>
          <NavigationRoot />
        </SafeAreaProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
