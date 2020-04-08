import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'

import { Creators as UserActions } from '../../_store/_ducks/user'

import {
  getToken,
  getUserName,
  getUserEmail,
  getUserId
} from '../../_services/auth'

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  componentDidMount() {
    const {
      user: { loggedIn },
      signInSuccess,
      signOut
    } = this.props

    if(!loggedIn) {
      if(getToken()) {
        const data = {
          access_token: getToken(),
          user: {
            id: getUserId(),
            name: getUserName(),
            email: getUserEmail()
          }
        }
        signInSuccess(data, false)
      } else {
        console.log('Invalid/missing tokens')
        signOut()
      }
    }
  }
  handleLogin = () => {

    const { username, password } = this.state
    const { signInRequest } = this.props
    signInRequest(username, password)
  }

  render() {
    const {
      user: { loggedIn, loading } 
    } = this.props

    return (
      <form onSubmit={!loading && this.handleLogin}>
        <input name="username" type="text" />
        <input name="password" type="password" />
        <button type="submit" value="enviar">Enviar</button>

      </form>
    )
  }
}
const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...UserActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)