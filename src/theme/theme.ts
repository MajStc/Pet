export type MainThemeType = {
  colors: {
    primary: string
    secondary: string
  }
}

export const lightTheme: MainThemeType = {
  colors: {
    primary: '#FF0000',
    secondary: '#FFFFFF',
  },
}

export const darkTheme: MainThemeType = {
  colors: {
    primary: '#FFFFFF',
    secondary: '#000000',
  },
}
