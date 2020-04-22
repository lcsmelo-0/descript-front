import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as ImageActions } from '../../store/ducks/image'

import {
  Button,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Container
} from "reactstrap";

import Spinner from '../../components/icons/Spinner'

class Detail extends Component {

  state = {
    name: '',
    decription: '',
    file: ''
  }

  componentWillMount() {
    console.log(this.props.match.params.id)
    this.props.getImageRequest(this.props.match.params.id)
  }

  handleSubmit = event => {
    event.preventDefault()
    const { usernameInput, passwordInput } = this.state
    const { signInRequest } = this.props
    signInRequest(usernameInput, passwordInput)
  }

  render() {
    const { image: {loading, image} } = this.props
    return (
      <Container>
        <h1>Detalhe do trabalho</h1>
        <Row>
          {loading ? (
            <div className="container d-flex flex-column md-12" >
              <Spinner />
            </div>
          ) : (
            <Col className="container">
              <Form onSubmit={this.handleSubmit}>
                <Col className="d-flex flex-column" md="12">
                  <FormGroup>
                    <label htmlFor="nome">Nome da imagem</label>
                    <Input color="muted" name="nome" disabled value={image.name} />
                  </FormGroup>
                </Col>
                <Col className="d-flex flex-column" md="12">
                  <FormGroup>
                    <p>Imagem:</p>
                    <img src={image.file} alt={image.name} />                    
                  </FormGroup>
                </Col>
                 <Col md="12">
                  <FormGroup>
                    <label htmlFor="description">Descrição sugerida</label>
                      {/* <p>{image.description}</p> */}
                      <Input type="textarea" disabled value={image.description} />
                  </FormGroup>
                </Col>
                 <Col md="12">
                  <FormGroup>
                      <label htmlFor="description">Descrição</label>
                      <Input type="textarea" name="description" onChange={e => this.setState({ description: e.target.value })} />
                  </FormGroup>
                </Col>
                 <Col md="12">
                  <FormGroup>
                    <Button type="submit">Enviar</Button>
                  </FormGroup>
                </Col>
              </Form>
            </Col>
           ) }
        </Row>
      </Container>
    )
  }
}
const mapStateToProps = state => ({
  image: state.image
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...ImageActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
