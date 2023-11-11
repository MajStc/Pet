import { ReactNode, useLayoutEffect } from 'react'
import { Platform, StatusBar } from 'react-native'

import { useTheme } from '@emotion/react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { RootStackParamList } from '../../navigation/types'

export type UseNavigationHeaderProps = {
  headerLeft?: () => ReactNode
  headerRight?: () => ReactNode
  headerTitle?: () => ReactNode
  headerStyle?: Record<string, unknown>
}

export const useNavigationHeader = ({
  headerLeft,
  headerRight,
  headerTitle,
  headerStyle,
}: UseNavigationHeaderProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
  const { colors } = useTheme()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft,
      headerRight,
      headerTitle,
      headerStyle: { backgroundColor: colors.primary, ...(headerStyle ?? {}) },
      headerTitleAlign: 'center',
    })

    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(colors.primary)
    }
  }, [
    colors.primary,
    headerLeft,
    headerRight,
    headerStyle,
    headerTitle,
    navigation,
  ])
}
