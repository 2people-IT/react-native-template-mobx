import React from 'react'
import {TextInputProps} from 'react-native'
import styled from '@emotion/native'
import {FontSizes, FontFamily, FontWeights, Colors} from '@emotion/react'

export interface InputProps {
  width?: number | string
  height?: number | string
  flex?: number
  size?: FontSizes
  family?: FontFamily
  weight?: FontWeights
  lineHeight?: number
  color?: Colors
}

const TextInput = styled.TextInput<InputProps>`
  flex: 1;
  allow-font-scaling: false;
  include-font-padding: false;
  text-align-vertical: center;
  padding: 0px;
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
`

export function Input(props: InputProps & TextInputProps) {
  return <TextInput {...props} />
}
