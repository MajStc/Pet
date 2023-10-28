export type MyTextVariant = 'header' | 'body'
export type MyTextSize = 'big' | 'medium' | 'small'

type CombinedSizeWithThickness = MyTextSize | 'fontWeight'

export type TextTheme = Record<
  MyTextVariant,
  Record<CombinedSizeWithThickness, number>
>

export const textTheme: TextTheme = {
  body: {
    big: 36,
    medium: 24,
    small: 16,
    fontWeight: 400,
  },
  header: {
    big: 48,
    medium: 36,
    small: 24,
    fontWeight: 700,
  },
}
