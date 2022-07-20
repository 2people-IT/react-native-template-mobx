import React from 'react'
import {View} from 'react-native'
import * as UI from 'shared/ui'
import {s} from 'shared/phrases'

export const Home = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <UI.Font>{s.home}</UI.Font>
    </View>
  )
}
