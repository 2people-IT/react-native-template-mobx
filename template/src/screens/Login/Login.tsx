import React from 'react'
import {View, Button} from 'react-native'
import {s} from 'shared/phrases'
import {useAuth} from 'hooks'

export const Login = () => {
  const {login} = useAuth()
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title={s.login} onPress={login} />
    </View>
  )
}
