import { create } from 'zustand'

export type ThemeStateType = {
  theme: 'light' | 'dark'
  switchTheme: () => void
}

export const useThemeState = create<ThemeStateType>((set, get) => ({
  theme: 'light',
  switchTheme: () => {
    const currentTheme = get().theme
    set({ theme: currentTheme === 'dark' ? 'light' : 'dark' })
  },
}))
