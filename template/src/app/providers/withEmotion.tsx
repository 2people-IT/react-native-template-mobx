import React from 'react'
import {ThemeProvider} from '@emotion/react'
import {theme} from '../theme'

const EmotionProvider = ({children}: {children: React.ReactNode}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export const withEmotion = (Component: React.ReactNode) => (
  <EmotionProvider>{Component}</EmotionProvider>
)
