import React from 'react'
import * as UI from 'shared/ui'
import {s} from 'shared/phrases'
import {useAuth} from 'hooks'

export const Login = () => {
  const {login} = useAuth()
  return (
    <UI.Layout justify="center" align="center">
      <UI.DefaultInput placeholder="Login" />
      <UI.DefaultInput placeholder="Password" />
      <UI.Button title={s.login} onPress={login} />
    </UI.Layout>
  )
}
