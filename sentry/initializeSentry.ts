import { APP_ENV, SENTRY_DSN } from '@env'
import * as Sentry from '@sentry/react-native'

import { build, name, version } from '../package.json'

/**
 *
 * If you want to enable sentry in debug come here and edit the first is statement
 *
 * @returns initializes sentry
 */
export const withSentry = (App: () => JSX.Element) => {
  if (APP_ENV === 'debug') {
    return App
  }

  Sentry.init({
    dsn: SENTRY_DSN,
    debug: APP_ENV !== 'release',
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

  return Sentry.wrap(App)
}
