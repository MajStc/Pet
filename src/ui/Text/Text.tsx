import React from 'react'
import { TextProps } from 'react-native'

import styled from '@emotion/native'

import { MyTextSize, MyTextVariant } from '../../theme/textTheme'

export type MyTextProps = {
  variant: MyTextVariant
  size: MyTextSize
  color?: string
  numberOfLines?: number
} & Pick<TextProps, 'children'>

export const Text = ({
  size,
  variant,
  children,
  color,
  numberOfLines,
}: MyTextProps) => {
  return (
    <MyStyledText
      size={size}
      variant={variant}
      color={color}
      numberOfLines={numberOfLines}>
      {children}
    </MyStyledText>
  )
}

const MyStyledText = styled.Text<{
  variant: MyTextVariant
  size: MyTextSize
  color?: string
}>`
  font-size: ${({ theme, variant, size }) =>
    `${theme.typography[variant][size]}px`};
  font-weight: ${({ variant, theme }) =>
    `${theme.typography[variant].fontWeight}`};
  color: ${({ color }) => color || undefined};
`
