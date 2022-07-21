import React from 'react'
import {TouchableOpacityProps} from 'react-native'
import styled from '@emotion/native'
import {fluidSize} from 'shared/utils'
import {Font} from '../Font'

interface ButtonProps {
  title: string
}

const StyledButton = styled.TouchableOpacity<TouchableOpacityProps>`
  width: 100%;
  height: ${fluidSize({min: 30, max: 40}) + 'px'};
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.primary};
`

export function Button(props: ButtonProps & TouchableOpacityProps) {
  return (
    <StyledButton {...props} activeOpacity={0.8}>
      <Font color="textLight">{props.title ?? ''}</Font>
    </StyledButton>
  )
}
