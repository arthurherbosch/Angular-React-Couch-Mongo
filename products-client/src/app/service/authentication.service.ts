import { Injectable } from '@angular/core'
import { User } from './model/user'
import * as sha1 from 'js-sha1'

// provide singleton service with provideIn
@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    validUser: User

    constructor() {
        this.validUser = JSON.parse(localStorage.getItem('user'))
        //console.log(this.validUser)
    }

    login(username: string, password: string): User {
      if(username == 'test' && sha1(password) == 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3') {
        // store user details and basic auth credentials 
        // in local storage to keep user logged in between page refreshes
        this.validUser = new User(username, sha1(password))
        localStorage.setItem('user', JSON.stringify(this.validUser))
        return this.validUser
      }
      else {
        return null
      }
    }

    logout() {
        // nullify user to log user out
        this.validUser = null
        localStorage.removeItem('user')
    }
}