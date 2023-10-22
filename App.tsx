import React from 'react'

import { ThemeProvider } from '@emotion/react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { NavigationRoot } from './src/navigation'
import { useThemeState } from './src/state'
import { darkTheme, lightTheme } from './src/theme'

function App(): JSX.Element {
  const themeType = useThemeState(state => state.theme)

  return (
    <ThemeProvider theme={themeType === 'dark' ? darkTheme : lightTheme}>
      <SafeAreaProvider>
        <NavigationRoot />
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

export default App
