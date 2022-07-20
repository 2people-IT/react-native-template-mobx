import compose from 'compose-function'
import {withEmotion} from './withEmotion'
import {withSafeArea} from './withSafeArea'
import {withGestureHandler} from './withGestureHandler'

export const withProviders = compose(
  withEmotion,
  withSafeArea,
  withGestureHandler,
)
