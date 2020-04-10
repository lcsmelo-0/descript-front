import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'
import { Button, Input, Row, Col, Form, Card, CardHeader, CardBody, CardFooter, FormGroup, Label } from 'reactstrap'
import { Creators as UserActions } from '../../_store/_ducks/user'

import {
  getToken,
  getUserName,
  getUserEmail,
  getUserId
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

  handleChange = event => {
    console.log(event.target)
    const { name , value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleLogin = () => {

    const { username, password } = this.state
    const { signInRequest } = this.props
    signInRequest(username, password)
    alert(0)
  }

  render() {
    const {
      user: { loggedIn, loading } 
    } = this.props

    return (

        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h3>Login</h3>
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.handleLogin}>
                  <Col className="pr-md-1" md="5">
                    <Row>
                      <FormGroup>
                        <Label>Username</Label>
                        <Input placeholder="Username" name="username" onChange={this.handleChange} type="text" />
                      </FormGroup>
                    </Row>
                    <Row>
                      <FormGroup>
                        <Label>Password</Label>
                        <Input placeholder="Password" name="password" onChange={this.handleChange} type="password" />
                      </FormGroup>
                    </Row>                  
                    <Row>
                      <Button className="btn-fill" color="primary" type="submit">
                        Save
                      </Button>                      
                    </Row>
                  </Col>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      
    )
  }
}
const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...UserActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)