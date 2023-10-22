import React from 'react'

import { ThemeProvider } from '@emotion/react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { NavigationRoot } from './src/navigation'
import { lightTheme } from './src/theme'

function App(): JSX.Element {
  return (
    <ThemeProvider theme={lightTheme}>
      <SafeAreaProvider>
        <NavigationRoot />
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

export default App
