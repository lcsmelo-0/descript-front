import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'
import * as Yup from 'yup'
import { Button, Card,CardHeader, CardBody, CardFooter, CardText, FormGroup, Form, Input, Row, Col } from "reactstrap";

import  Spinner  from '../../components/icons/Spinner'

import toastr from '../../utils/toastr'

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
    refreshToken: false
  }
  
    componentDidMount() {
    const {
      user: { loggedIn },
      signInSuccess,
      signOut,
      location
    } = this.props
    if(loggedIn) {
      alert('logado')
    }
    console.log(LOCAL_KEY, getLocalObj(LOCAL_KEY))

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

        console.log('Valid local token')
        signInSuccess(data, false)
      }  else {
        console.log('Invalid/missing tokens')
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

  render() {
    const {
      location,
      user: { loading, loggedIn, resetHistory, userType: { isClient, isEditor, isReviser } },
      
    } = this.props
    
    if (loggedIn && isClient) return <Redirect from="/login" to="/client" />
    if (loggedIn && isReviser) return <Redirect from="/login" to="/reviser" />
    if (loggedIn && isEditor) return <Redirect from="/login" to="/editor" />
    return (
      <>
      {loading ? (
        <div className="container d-flex flex-column  md-12"> 
          <Spinner />
        </div>
      ) : (
        <div className="d-flex flex-column">
          <Row className="justify-content-center flex-row">
            <Col md="4">
              <Form schema={ schema } onSubmit={this.handleLogin}>
                <Row>
                  <Col className="pr-md-1" md="12">
                    <FormGroup>
                      <label>Email</label>
                      <Input
                        defaultValue="Seu email"
                        placeholder="Email"
                        type="text"
                        onChange={e => this.setState({ usernameInput: e.target.value })}
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pr-md-1" md="12">
                    <FormGroup>
                      <label>Password</label>
                      <Input
                        placeholder="Senha"
                        type="password"
                        onChange={e => this.setState({ passwordInput: e.target.value })}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <Button>Enviar</Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </div>
      )}
   </>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...UserActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)
