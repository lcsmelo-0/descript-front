import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'

import { Creators as UserActions } from '../../_store/_ducks/user'

import {
  getToken
} from '../../_services/auth'

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const {
      user: { loggedIn },
      signInSuccess,
      signOut
    } = this.props

    if (!loggedIn) {
      if (getToken()) {
        const data = {
          access_token: getToken()
        }
        signInSuccess(data, false)
      } else {
        console.log('Invalid/missing tokens')
        signOut()
      }
    }
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })

    // this.setState({ ...this.state, username: event.target.username, password: event.target.password })
  }

  handleLogin = e => {
    e.preventDefault();
    const { username, password } = this.state
    const { signInRequest } = this.props
    if (username && password) {
      alert(2)
      signInRequest(username, password)
    }

    console.log(this.state)
    alert(1)
  }

  render() {
    const { username, password } = this.state
    const { user: { loggedIn, loading } } = this.props
    if (loggedIn) {
      return <Redirect to="/" />
    }
    return (
      <form onSubmit={this.handleLogin}>
        <input name="username" value={username} onChange={this.handleChange} type="text" />
        <input name="password" value={password} onChange={this.handleChange} type="password" />
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