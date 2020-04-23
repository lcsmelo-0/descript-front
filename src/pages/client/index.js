import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as ImageActions } from '../../store/ducks/image'
import { Creators as WorkflowActions } from '../../store/ducks/workflow'

import Spinner from '../../components/icons/Spinner'
import Notification from '../../components/molecules/Notification'
import { Container, Row, Col, Card, CardBody, CardTitle, CardImg, CardText, CardHeader, Badge, Button, UncontrolledAlert } from 'reactstrap'

const Client = () => {

  const dispatch = useDispatch()

  const { images, loading } = useSelector((state) => state.image)

  useEffect(() => {
    dispatch(ImageActions.getImagesRequest())
  }, [])
  useEffect(() => {
    dispatch(WorkflowActions.getWorkflowStatusRequest())
  }, [])
  return (
    <>
      {loading ? (
        <div className="container d-flex flex-column  md-12">
          <Spinner />
        </div>
      ) : (
        <Container>
            <Row md="12">
              <a href="/client/image" className="btn btn-primary">Enviar nova imagem</a>
            </Row>
            <Row md="12" className="d-flex flex-row justify-content-start">
              {images.map(img => {
                return (
                  <Col xs={4}>
                    <Card key={img.id}>
                      <CardHeader>
                        <Badge color="primary" pill>{img.workflow.status}</Badge>
                      </CardHeader>

                      <CardBody>
                        <CardImg src={img.file} top width="100%" alt={img.name} />
                        <CardTitle>{img.name}</CardTitle>
                        <CardText>{img.description}</CardText>
                      </CardBody>
                    </Card>                  
                  </Col>
                )
              })}
          </Row>
        </Container>
      )}
    </>
  )
}

const mapStateToProps = state => ({
  image: state.image
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...ImageActions,
      ...WorkflowActions,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Client)