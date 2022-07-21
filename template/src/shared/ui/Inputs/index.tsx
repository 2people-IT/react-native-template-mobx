import React from 'react'
import {TextInputProps} from 'react-native'
import styled from '@emotion/native'
import {FontSizes, FontFamily, FontWeights, Colors} from '@emotion/react'
import {fluidSize} from 'shared/utils'

interface InputProps {
  width?: number | string
  height?: number | string
  flex?: number
  size?: FontSizes
  family?: FontFamily
  weight?: FontWeights
  lineHeight?: number
  color?: Colors
}

interface DefaultInputProps {
  width?: number | string
  height?: number | string
  paddingHorizontal?: number | string
}

const TextInput = styled.TextInput<InputProps>`
  flex: 1;
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
const StyledDefaultInput = styled.View<DefaultInputProps>`
  width: ${({width}) => width ?? '100%'};
  height: ${({height}) => height ?? fluidSize({min: 30, max: 40}) + 'px'};
  padding-horizontal: ${({paddingHorizontal}) =>
    paddingHorizontal ?? fluidSize({min: 8, max: 16}) + 'px'};
  background: ${({theme}) => theme.colors.backgroundDefault};
`

export function Input(props: InputProps & TextInputProps) {
  return <TextInput {...props} />
}

export function DefaultInput(
  props: InputProps & TextInputProps & DefaultInputProps,
) {
  const {width, height} = props
  return (
    <StyledDefaultInput {...{width, height}}>
      <Input {...props} />
    </StyledDefaultInput>
  )
}
