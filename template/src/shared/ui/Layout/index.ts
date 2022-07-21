import styled from '@emotion/native'
import {ViewProps} from 'react-native'
import {fluidSize} from 'shared/utils'

interface LayoutProps {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  align?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'space-between'
    | 'space-around'
}

export const Layout = styled.View<LayoutProps & ViewProps>`
  flex: 1;
  flex-direction: ${({direction}) => direction};
  justify-content: ${({justify}) => justify};
  align-items: ${({align}) => align};
  padding-horizontal: ${fluidSize({min: 8, max: 16}) + 'px'};
  padding-vertical: ${fluidSize({min: 8, max: 16}) + 'px'};
`
