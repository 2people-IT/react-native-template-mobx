import React from 'react'
import {TextProps} from 'react-native'
import styled from '@emotion/native'
import {FontSizes, FontFamily, FontWeights, Colors} from '@emotion/react'

interface FontProps {
  size?: FontSizes
  family?: FontFamily
  weight?: FontWeights
  lineHeight?: number
  color?: Colors
  children?: React.ReactNode
  underline?: boolean
  alignCenter?: boolean
  textAlign?: 'left' | 'auto' | 'center' | 'right' | 'justify'
  textTransform?: 'capitalize' | 'lowercase' | 'none' | 'uppercase'
  devMode?: boolean
}

const Text = styled.Text<Omit<FontProps, 'children'>>`
  allow-font-scaling: false;
  include-font-padding: false;
  text-align-vertical: center;
  font-family: ${({theme, family, weight}) =>
    theme.fontNames[family ?? 'roboto'][weight ?? 'regular']};
  font-size: ${({theme, size}) => theme.fontSizes[size ?? 'medium']};
  line-height: ${({theme, size, lineHeight}) => {
    if (!lineHeight) {
      return lineHeight // auto
    }
    return lineHeight * parseInt(theme.fontSizes[size ?? 'medium'], 10) + 'px'
  }};
  color: ${({theme, color}) => theme.colors[color ?? 'text']};
  text-decoration-line: ${({underline}) => (underline ? 'underline' : 'none')};
  text-align: ${({textAlign}) => textAlign ?? 'auto'};
  text-transform: ${({textTransform}) => textTransform ?? 'none'};
`

export function Font(props: FontProps & TextProps) {
  return <Text {...props}>{props.devMode ? props.size : props.children}</Text>
}
