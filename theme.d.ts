import '@emotion/react'
import { MainThemeType } from './src/theme'

declare module '@emotion/react' {
  export interface Theme extends MainThemeType {}
}
