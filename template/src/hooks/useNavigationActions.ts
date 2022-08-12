import {
  useNavigation,
  CommonActions,
  StackActions,
} from '@react-navigation/native'

export function useNavigationActions() {
  const navigation = useNavigation()

  function resetMain() {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {
            name: 'main',
            state: {
              routes: [
                {
                  name: 'settings',
                },
              ],
            },
          },
        ],
      }),
    )
  }

  function replaceTo(name: AppNavigation.Navigators) {
    navigation.dispatch(StackActions.replace(name))
  }

  function goTo(name: any) {
    navigation.navigate(name)
  }

  function pop() {
    navigation.goBack()
  }

  return {resetMain, replaceTo, goTo, pop}
}
