import * as React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Main} from '../Main'
import {Welcome} from '../Welcome'
import {commonNavigatorOptions} from '../../options'
import {mainNavigator} from '../../options'
import {useAuth} from 'hooks'

const RootStack = createNativeStackNavigator<AppNavigation.Root>()

export const Root = () => {
  const {isAuth} = useAuth()
  return (
    <RootStack.Navigator
      initialRouteName={isAuth ? 'main' : 'welcome'}
      screenOptions={commonNavigatorOptions}>
      <RootStack.Screen name="welcome" component={Welcome} />
      <RootStack.Screen name="main" component={Main} options={mainNavigator} />
    </RootStack.Navigator>
  )
}
