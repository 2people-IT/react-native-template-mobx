import React from 'react'
import {TextInputProps} from 'react-native'
import styled from '@emotion/native'
import {fluidSize} from 'shared/utils'

import {Input, InputProps} from './Input'

interface DefaultInputProps {
  width?: number | string
  height?: number | string
  paddingHorizontal?: number | string
}

const StyledDefaultInput = styled.View<DefaultInputProps>`
  width: ${({width}) => width ?? '100%'};
  height: ${({height}) => height ?? fluidSize({min: 30, max: 40}) + 'px'};
  padding-horizontal: ${({paddingHorizontal}) =>
    paddingHorizontal ?? fluidSize({min: 8, max: 16}) + 'px'};
  background: ${({theme}) => theme.colors.backgroundDefault};
`

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
