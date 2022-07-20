import React, {useState} from 'react'
import {
  NavigationContainer,
  DefaultTheme,
  useNavigationContainerRef,
} from '@react-navigation/native'
import {SystemBars} from 'react-native-bars'
import RNBootSplash from 'react-native-bootsplash'
import {useFlipper} from '@react-navigation/devtools'
import {withProviders} from '../providers'
import {Root} from './navigators'
import {theme} from '../theme'

const Theme = {
  ...DefaultTheme,
  colors: theme.colors,
}

const AppNavigaton = () => {
  const navigationRef = useNavigationContainerRef()
  const [systemBarsIsReady, setSystemBarsIsReady] = useState(false)

  useFlipper(navigationRef)

  function handleOnReady() {
    RNBootSplash.hide({fade: true}).then(() => {
      setTimeout(() => {
        setSystemBarsIsReady(true)
      }, 200)
    })
  }

  return (
    <>
      {systemBarsIsReady && <SystemBars barStyle="dark-content" />}
      <NavigationContainer
        ref={navigationRef}
        theme={Theme}
        onReady={handleOnReady}>
        <Root />
      </NavigationContainer>
    </>
  )
}

export const App = () => withProviders(<AppNavigaton />)
