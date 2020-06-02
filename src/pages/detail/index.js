import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { Redirect } from "react-router-dom"

import { Creators as ImageActions } from "../../store/ducks/image"
import { Creators as WorkflowActions } from "../../store/ducks/workflow"

import { useFormFields } from "../../utils/hooks"

import {
  Button,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Container
} from "reactstrap"

import Spinner from "../../components/icons/Spinner"
import Header from "../../components/Header"

const Detail = props => {
  const [fields, handleFieldsChange] = useFormFields({
    description: ""
  })

  const dispatch = useDispatch()

  const { image, loading } = useSelector(state => state.image)

  const { workflow } = useSelector(state => state.workflow)
  const { userType } = useSelector(state => state.user)

  useEffect(() => {
    dispatch(ImageActions.getImageRequest(props.match.params.id))
  }, [])
  useEffect(() => {
    dispatch(WorkflowActions.updateWorkflowStatusSuccess())
  }, [])

  if (workflow && workflow.status === 200) {
    if (userType.isEditor)
      return (
        <Redirect from={`/detail/${props.match.params.id}`} to="/editor" />
      )
    if (userType.isReviser)
      return (
        <Redirect from={`/detail/${props.match.params.id}`} to="/reviser" />
      )
  }

  const handleSubmit = event => {
    event.preventDefault()
    let imageId = props.match.params.id
    let workflowId = image.workflow ? image.workflow.id : null

    dispatch(
      WorkflowActions.updateWorkflowStatusRequest({
        fields,
        workflowId,
        imageId
      })
    )
  }

  const handleApprove = event => {
    event.preventDefault()
    let imageId = props.match.params.id
    let workflowId = image.workflow ? image.workflow.id : null
    let description = image.texts
      ? image.texts[image.texts.length - 1].text
      : null
    dispatch(
      WorkflowActions.approveWorkflowRequest({
        description,
        workflowId,
        imageId
      })
    )
  }

  return (
    <>
      <Header />
      <Container>
        <h1>Detalhe do trabalho</h1>
        <Row>
          {loading ? (
            <div className="container d-flex flex-column md-12">
              <Spinner />
            </div>
          ) : (
              <Col className="container">
                <Form onSubmit={handleSubmit}>
                  <Col className="d-flex flex-column" md="12">
                    <FormGroup>
                      <label htmlFor="nome">Nome da imagem</label>
                      <Input
                        color="muted"
                        name="nome"
                        disabled
                        value={image.name}
                      />
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

                      {image.texts ? (
                        <Input
                          type="textarea"
                          disabled
                          value={image.texts[image.texts.length - 1].text}
                        />
                      ) : (
                          <></>
                        )}
                    </FormGroup>
                  </Col>
                  <Col md="12">
                    <FormGroup>
                      <label htmlFor="description">Descrição</label>
                      <Input
                        type="textarea"
                        name="description"
                        id="description"
                        onChange={handleFieldsChange}
                      />
                    </FormGroup>
                  </Col>

                  <Col md="12">
                    <FormGroup>
                      <Button type="submit">Enviar</Button>
                      {userType.isReviser ? (
                        <Button onClick={handleApprove} color="success">
                          Aprovar
                        </Button>
                      ) : (
                          <></>
                        )}
                    </FormGroup>
                  </Col>
                </Form>
              </Col>
            )}
        </Row>
      </Container>
    </>
  )
}

export default Detail
