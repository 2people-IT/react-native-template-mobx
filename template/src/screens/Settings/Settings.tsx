import React from 'react'
import {View, Button} from 'react-native'
import * as UI from 'shared/ui'
import {s} from 'shared/phrases'
import {useAuth} from 'hooks'

export const Settings = () => {
  const {logout} = useAuth()
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <UI.Font>{s.settings}</UI.Font>
      <Button title={s.exit} onPress={logout} />
    </View>
  )
}
