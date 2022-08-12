import {useState} from 'react'
import {auth} from 'stores'
import {useNavigationActions} from './useNavigationActions'

export function useAuth() {
  const [isFetching, setIsFetching] = useState(false)
  const {replaceTo} = useNavigationActions()
  const isAuth = auth.isAuth

  function login({password}: {login: string; password: string}) {
    setIsFetching(true)
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        resolve(true)
        auth.login()
        replaceTo('main')
        setIsFetching(false)
      }, 1000)
    })
  }

  function logout() {
    auth.logout()
    replaceTo('welcome')
  }

  return {isAuth, login, logout, isFetching}
}
