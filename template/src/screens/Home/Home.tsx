import React from 'react'
import * as UI from 'shared/ui'
import {s} from 'shared/phrases'

export const Home = () => {
  return (
    <UI.Layout justify="center" align="center">
      <UI.Font>{s.home}</UI.Font>
    </UI.Layout>
  )
}
