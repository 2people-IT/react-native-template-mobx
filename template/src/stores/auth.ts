import {makeAutoObservable} from 'mobx'
import {makePersistable} from 'mobx-persist-store'

class Auth {
  isAuth = false

  constructor() {
    makeAutoObservable(this)
    makePersistable(this, {name: 'Auth', properties: ['isAuth']})
  }

  login() {
    this.isAuth = true
  }

  logout() {
    this.isAuth = false
  }
}

export const auth = new Auth()
