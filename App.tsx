import React from 'react'

import { ThemeProvider } from '@emotion/react'
import { APP_ENV, SENTRY_DSN } from '@env'
import * as Sentry from '@sentry/react-native'
import { QueryClientProvider } from '@tanstack/react-query'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { build, name, version } from './package.json'
import { queryClient } from './src/api'
import { NavigationRoot } from './src/navigation'
import { useThemeState } from './src/state'
import { theme } from './src/theme'

Sentry.init({
  dsn: SENTRY_DSN,
  debug: APP_ENV === 'debug',
  tracesSampleRate: 1.0,
  environment: APP_ENV,
  release: `com.${name}@${version}`,
  dist: String(build),
  // attachStacktrace: true,
  sendDefaultPii: false,
  autoSessionTracking: true,
  // This is default but I put it here in case I should track more nested objects
  normalizeDepth: 3,
  enableCaptureFailedRequests: true,
  enableTracing: true,
  enableNative: true,
  autoInitializeNativeSdk: true,
  enableNativeCrashHandling: true,
  enableNativeNagger: true,
  enableAutoSessionTracking: true,
  enableNdkScopeSync: true,
  enableAutoPerformanceTracing: true,
  enableAppHangTracking: true,
})

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

export default Sentry.wrap(App)
