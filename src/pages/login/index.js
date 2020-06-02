import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'
import * as Yup from 'yup'
import { Container, Col } from 'reactstrap'


import Spinner from '../../components/icons/Spinner'

import {
  LOCAL_KEY,
  getLocalObj,
  getToken,
  getUserEmail,
  getUserId,
  getUserName,
  getUserEmailVerified,
  getUserClientId,
  getUserReviverId,
  getUserEditorId,
  getUserCreatedAt,
  getUserUpdatedAt,
  getUserDeletedAt,
  getUserType,
  getAccessTokenExpiration,
  excludeData
} from '../../services/auth'

import { Creators as UserActions } from '../../store/ducks/user'

const schema = Yup.object().shape({
  username: Yup.string().required('Campo obrigatório'),
  password: Yup.string()
    .required('Campo obrigatório')
})
class Login extends Component {
  state = {
    usernameInput: '',
    passwordInput: '',
    refreshToken: false,
    inputType: 'password'
  }

  componentDidMount() {
    const {
      user: { loggedIn },
      signInSuccess,
      signOut
    } = this.props

    if (getLocalObj(LOCAL_KEY) && !loggedIn) {
      if (getToken()) {
        const data = {
          access_token: getToken(),
          accessTokenExpiration: getAccessTokenExpiration(),
          user: {
            id: getUserId(),
            name: getUserName(),
            email: getUserEmail(),
            email_verified_at: getUserEmailVerified(),
            client_id: getUserClientId(),
            reviser_id: getUserReviverId(),
            editor_id: getUserEditorId(),
            created_at: getUserCreatedAt(),
            updated_at: getUserUpdatedAt(),
            deleted_at: getUserDeletedAt()
          },
          userType: {
            isClient: getUserType().isClient,
            isEditor: getUserType().isEditor,
            isReviser: getUserType().isReviser
          }
        }
        signInSuccess(data, false)
      } else {
        excludeData()
        signOut()
      }
    }
  }

  handleLogin = event => {
    event.preventDefault()
    const { usernameInput, passwordInput } = this.state
    const { signInRequest } = this.props
    signInRequest(usernameInput, passwordInput)
  }

  showPassword = () => {
    this.setState({ inputType: this.state.inputType === 'password' ? 'text' : 'password' })
  }

  render() {
    const {
      user: { loading, loggedIn, userType: { isClient, isEditor, isReviser } },
    } = this.props

    if (loggedIn && isClient) return <Redirect from="/login" to="/client" />
    if (loggedIn && isReviser) return <Redirect from="/login" to="/reviser" />
    if (loggedIn && isEditor) return <Redirect from="/login" to="/editor" />

    return (
      <>
        {loading ? (
          <Container className="d-flex flex-column  md-12">
            <Spinner />
          </Container>
        ) : (
            <section>
              <Container>
                <div className="row align-items-center justify-content-center slice ">
                  <Col className="4 py-6 py-md-0" md="6">
                    <div>
                      <div className="mb-5 text-center">
                        <h6 className="h3 mb-1">Login</h6>
                        <p className="text-muted mb-0">Entre com sua conta para continuar.</p>
                      </div>
                      <span className="clearfix">
                      </span>
                      <form schema={schema} onSubmit={this.handleLogin}>
                        <div className="form-group">
                          <label className="form-control-label">Email</label>
                          <div className="input-group input-group-merge">
                            <input type="email" className="form-control form-control-prepend" id="input-email" placeholder="nome@exemplo.com" onChange={e => this.setState({ usernameInput: e.target.value })} />
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
                                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2">
                                  </path>
                                  <circle cx="12" cy="7" r="4">
                                  </circle>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="form-group mb-0">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <label className="form-control-label">Senha</label>
                            </div>
                            <div className="mb-2">
                              <a href="#" className="small text-muted text-underline--dashed border-primary" onClick={this.showPassword}>Exibir senha</a>
                            </div>
                          </div>
                          <div className="input-group input-group-merge">
                            <input type={this.state.inputType} className="form-control form-control-prepend" id="input-password" placeholder="Password" onChange={e => this.setState({ passwordInput: e.target.value })} />
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-key">
                                  <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4">
                                  </path>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <button type="submit" className="btn btn-block btn-primary">Entrar</button>
                        </div>
                      </form>
                    </div>
                  </Col>
                </div>
              </Container>
            </section>
          )}
      </>
    )
  }
}

const mapStateToProps = state =>
  ({
    user: state.user
  })

const mapDispatchToProps = dispatch =>

  bindActionCreators({ ...UserActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)
