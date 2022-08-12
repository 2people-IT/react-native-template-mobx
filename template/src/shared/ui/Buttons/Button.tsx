import React from 'react'
import {ActivityIndicator} from 'react-native'
import {TouchableOpacityProps} from 'react-native'
import styled from '@emotion/native'
import {useTheme} from '@emotion/react'
import {fluidSize} from 'shared/utils'
import {Font} from '../Font'

interface ButtonProps {
  title: string
  loading?: boolean
}

const StyledButton = styled.TouchableOpacity<TouchableOpacityProps>`
  width: 100%;
  height: ${fluidSize({min: 30, max: 40}) + 'px'};
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.primary};
`

export function Button(props: ButtonProps & TouchableOpacityProps) {
  const theme = useTheme()
  return (
    <StyledButton disabled={props.loading} activeOpacity={0.8} {...props}>
      {props.loading ? (
        <ActivityIndicator color={theme.colors.indicator} />
      ) : (
        <Font color="textLight">{props.title ?? ''}</Font>
      )}
    </StyledButton>
  )
}
