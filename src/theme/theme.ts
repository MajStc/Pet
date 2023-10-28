import { ColorsThemeType, darkTheme, lightTheme } from './colorsTheme'
import { textTheme, TextTheme } from './textTheme'

export type MainThemeType = {
  colors: ColorsThemeType
  typography: TextTheme
}

export const theme = (variant: 'light' | 'dark'): MainThemeType => {
  return {
    colors: variant === 'dark' ? darkTheme : lightTheme,
    typography: textTheme,
  }
}
