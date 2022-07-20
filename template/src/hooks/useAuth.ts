import {auth} from 'stores'
import {useNavigationActions} from './useNavigationActions'

export function useAuth() {
  const {replaceTo} = useNavigationActions()
  const isAuth = auth.isAuth

  function login() {
    auth.login()
    replaceTo('main')
  }

  function logout() {
    auth.logout()
    replaceTo('welcome')
  }

  return {isAuth, login, logout}
}
