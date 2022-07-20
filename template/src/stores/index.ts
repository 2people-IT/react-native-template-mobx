import {spy} from 'mobx'
import {createMobxDebugger} from 'mobx-flipper'

import '../app/storage'
import {auth} from './auth'

// store debugging
if (__DEV__) {
  // @ts-ignore
  spy(createMobxDebugger(auth))
}

export {auth}
