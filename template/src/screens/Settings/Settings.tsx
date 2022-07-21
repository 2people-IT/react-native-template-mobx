import React from 'react'
import * as UI from 'shared/ui'
import {s} from 'shared/phrases'
import {useAuth} from 'hooks'

export const Settings = () => {
  const {logout} = useAuth()
  return (
    <UI.Layout justify="center" align="center">
      <UI.Button title={s.exit} onPress={logout} />
    </UI.Layout>
  )
}
